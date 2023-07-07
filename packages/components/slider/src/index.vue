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
        :disabled="showTooltip"
        :manual="true"
        :content="'' + currentValue"
        :offset="3"
        placement="top"
      >
        <progress-button :direction="direction"></progress-button>
      </ra-tooltip>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { isNull } from 'lodash';
import {
  CSSProperties,
  computed,
  onMounted,
  onUnmounted,
  provide,
  ref,
  useModel,
} from 'vue';
import ProgressButton from './button.vue';
import { SLIDER_PROVIDE_TOKEN, sliderProps } from './slider';

defineOptions({
  name: 'RaSlider',
});

const props = defineProps(sliderProps);
const maskAvg = ref(0);
const trackWidth = ref(0);
const isDrag = ref(false);
const trackHeight = ref(0);
const sliderDistance = ref(0);
const trackRef = ref<HTMLElement>();
const currentValue = useModel(props, 'modelValue');

const direction = computed(() => (props.vertical ? 'y' : 'x'));

const or = new ResizeObserver(() => {
  if (isNull(trackRef.value)) {
    return;
  }
  setTheTrackWidth();
});

const processBarStyle = computed(() => {
  const res: CSSProperties[] = [];

  props.vertical
    ? res.push({ height: `${sliderDistance.value}px` })
    : res.push({ width: `${sliderDistance.value}px` });
  return res;
});

const processTrackClass = computed(() => {
  const ret: string[] = [];
  props.vertical && ret.push('is-vertical');
  return ret;
});

const processTrackStyle = computed(() => {
  const ret: CSSProperties[] = [];
  props.height && props.vertical && ret.push({ height: props.height });
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
  step: ref(props.step),
  maxValue: ref(props.max),
};

provide(SLIDER_PROVIDE_TOKEN, slideProvide);

onMounted(() => {
  if (!trackRef.value) return;
  or.observe(trackRef.value);
});

onUnmounted(() => {
  or.disconnect();
});
</script>
