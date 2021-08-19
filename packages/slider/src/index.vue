<template>
  <section class="ra-slider">
    <div ref="trackRef" class="ra-slider__track">
      <div
        class="ra-slider__progress-bar"
        :class="[{ 'is-vertical': raIsVertical }]"
        :style="processBarStyle"
      ></div>
      <ra-tooltip
        v-model:visible="isDrag"
        :ra-manual="true"
        :ra-content="'' + modelValue"
        :ra-offset="3"
        ra-placement="top"
      >
        <progress-button :direction="raIsVertical ? 'y' : 'x'" />
      </ra-tooltip>
    </div>
  </section>
</template>

<script lang="ts">
import { isNull } from 'lodash';
import RaTooltip from '@radium-vue/tooltip';
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
    RaTooltip,
  },
  props: {
    modelValue: {
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
    const isDrag = ref(false);
    const trackWidth = ref(0);
    const currentValue = ref(0);
    const sliderDistance = ref(0);
    const trackRef = ref<HTMLElement>();
    const or = new ResizeObserver(() => {
      if (isNull(trackRef.value)) {
        return;
      }
      setTheTrackWidth();
    });
    const processBarStyle = computed(() => {
      const res = [];
      props.raIsVertical
        ? res.push({ height: sliderDistance.value + '%' })
        : res.push({ width: sliderDistance.value + '%' });
      return res;
    });

    provide<TSliderProvide>(SLIDER_PROVIDE_TOKEN, {
      isDrag,
      trackWidth,
      currentValue,
      sliderDistance,
      step: ref(props.raStep),
      maxValue: ref(props.raMax),
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
      isDrag,
      trackRef,
      processBarStyle,
    };
  },
});
</script>
