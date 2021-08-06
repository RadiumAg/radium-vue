<template>
  <section class="ra-slider">
    <div ref="trackRef" class="ra-slider__track">
      <div
        class="ra-slider__progress-bar"
        :style="{ width: processBarWidth }"
      ></div>
      <progress-button :direction="raIsVertical ? 'y' : 'x'" />
    </div>
  </section>
</template>

<script lang="ts">
import { isNull } from 'lodash';
import { UPDATE_MODEL_EVENT } from '@radium-vue/utils/common';
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watchEffect,
} from 'vue';
import progressButton from './button.vue';
import { SLIDER_PROVIDE_TOKEN, TSliderProvide } from './slider';
export default defineComponent({
  name: 'RaSlider',
  components: {
    progressButton,
  },
  props: {
    modalValue: {
      type: Number,
      default: 0,
    },
    raMin: {
      type: Number,
      default: 0,
    },
    raMax: {
      type: Number,
      default: 100,
    },
    raDisabled: {
      type: Boolean,
      default: false,
    },
    raStep: {
      type: Number,
      default: 1,
    },
    raShowTooltip: {
      type: Boolean,
      default: false,
    },
    raIsVertical: {
      type: Boolean,
      default: false,
    },
    raHeight: {
      type: Number,
      default: 0,
    },
    raShowStops: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const trackRef = ref<HTMLElement>();
    const trackWidth = ref(0);
    const sliderDistance = ref(0);
    const currentValue = ref(0);
    const or = new ResizeObserver(() => {
      if (isNull(trackRef.value)) {
        return;
      }
      setTheTrackWidth();
    });
    const processBarWidth = computed(() => {
      const res = sliderDistance.value + '%';
      return res;
    });

    provide<TSliderProvide>(SLIDER_PROVIDE_TOKEN, {
      trackWidth,
      sliderDistance,
      maxValue: ref(props.raMax),
      step: ref(props.raStep),
      currentValue,
    });

    //funs
    function setTheTrackWidth() {
      trackWidth.value = trackRef.value.clientWidth;
    }

    //lifeclycle
    onMounted(() => {
      or.observe(trackRef.value);
    });

    onUnmounted(() => {
      or.disconnect();
    });

    watchEffect(() => {
      emit(
        UPDATE_MODEL_EVENT,
        Math.round(sliderDistance.value * props.raMax) / 100,
      );
    });

    return {
      props,
      trackRef,
      processBarWidth,
    };
  },
});
</script>
