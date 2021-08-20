<template>
  <section class="ra-slider">
    <div
      ref="trackRef"
      class="ra-slider__track"
      :class="processTrackClass"
      :style="processTrackStyle"
    >
      <div class="ra-slider__progress-bar" :style="processBarStyle"></div>
      <ra-tooltip
        v-model:visible="isDrag"
        :ra-disabled="raShowTooltip"
        :ra-manual="true"
        :ra-content="'' + modelValue"
        :ra-offset="3"
        ra-placement="top"
      >
        <progress-button :direction="raVertical ? 'y' : 'x'" />
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
      default: 10,
    },
    raShowTooltip: {
      type: Boolean,
      default: false,
    },
    raVertical: {
      type: Boolean,
      default: false,
    },
    raHeight: {
      type: String,
      default: '',
    },
    raShowStops: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const isDrag = ref(false);
    const trackWidth = ref(0);
    const trackHeight = ref(0);
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
      props.raVertical
        ? res.push({ height: sliderDistance.value + '%' })
        : res.push({ width: sliderDistance.value + '%' });
      return res;
    });

    const processTrackClass = computed(() => {
      const ret = [];
      props.raVertical && ret.push('is-vertical');
      return ret;
    });

    const processTrackStyle = computed(() => {
      const ret = [];
      props.raHeight &&
        props.raVertical &&
        ret.push({ height: props.raHeight });
      return ret;
    });

    provide<TSliderProvide>(SLIDER_PROVIDE_TOKEN, {
      isDrag,
      trackWidth,
      trackHeight,
      currentValue,
      sliderDistance,
      step: ref(props.raStep),
      maxValue: ref(props.raMax),
    });

    //funs
    function setTheTrackWidth() {
      trackWidth.value = trackRef.value.clientWidth;
      trackHeight.value = trackRef.value.clientHeight;
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
      processTrackClass,
      processBarStyle,
      processTrackStyle,
    };
  },
});
</script>
