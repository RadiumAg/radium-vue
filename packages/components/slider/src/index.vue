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
        <progress-button :direction="direction"></progress-button>
      </ra-tooltip>
    </div>
  </section>
</template>

<script lang="ts">
import { isNull } from 'lodash';
import { UPDATE_MODEL_EVENT } from '@radium-vue/utils/common';
import {
  CSSProperties,
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  provide,
  ref,
  watchEffect,
} from 'vue';
import progressButton from './button.vue';
import { ButtonBarConfig, SLIDER_PROVIDE_TOKEN, SliderProvide } from './slider';

export default defineComponent({
  name: 'RaSlider',
  components: {
    progressButton,
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
    const maskAvg = ref(0);
    const trackWidth = ref(0);
    const isDrag = ref(false);
    const trackHeight = ref(0);
    const currentValue = ref(0);
    const sliderDistance = ref(0);
    const trackRef = ref<HTMLElement>();

    const direction = computed(() => (props.raVertical ? 'y' : 'x'));

    const or = new ResizeObserver(() => {
      if (isNull(trackRef.value)) {
        return;
      }
      setTheTrackWidth();
    });

    const processBarStyle = computed(() => {
      const res: CSSProperties[] = [];

      props.raVertical
        ? res.push({ height: `${sliderDistance.value}px` })
        : res.push({ width: `${sliderDistance.value}px` });
      return res;
    });

    const processTrackClass = computed(() => {
      const ret: string[] = [];
      props.raVertical && ret.push('is-vertical');
      return ret;
    });

    const processTrackStyle = computed(() => {
      const ret: CSSProperties[] = [];
      props.raHeight &&
        props.raVertical &&
        ret.push({ height: props.raHeight });
      return ret;
    });

    function setTheTrackWidth() {
      if (!trackRef.value) return;
      trackWidth.value = trackRef.value.clientWidth;
      trackHeight.value = trackRef.value.clientHeight;
    }

    const slideProvide = {
      maskAvg,
      isDrag,
      trackWidth,
      trackHeight,
      currentValue,
      sliderDistance,
      step: ref(props.raStep),
      maxValue: ref(props.raMax),
    };

    provide<SliderProvide>(SLIDER_PROVIDE_TOKEN, slideProvide);

    onMounted(() => {
      if (!trackRef.value) return;
      or.observe(trackRef.value);
    });

    onUnmounted(() => {
      or.disconnect();
    });

    watchEffect(() => {
      emit(
        UPDATE_MODEL_EVENT,
        Math.ceil(
          (sliderDistance.value /
            slideProvide[ButtonBarConfig[direction.value].track].value) *
            props.raMax,
        ),
      );
    });

    return {
      props,
      isDrag,
      trackRef,
      direction,
      processTrackClass,
      processBarStyle,
      processTrackStyle,
    };
  },
});
</script>
