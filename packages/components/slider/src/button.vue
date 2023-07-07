<template>
  <div
    ref="buttonRef"
    class="ra-slider__button-area"
    :class="buttonClass"
    :style="buttonStyle"
    @mouseover="buttonMouseOver"
    @mousedown="buttonMouseDown($event)"
    @mouseleave="buttonMuseLeave"
  >
    <div class="ra-slider__button"></div>
  </div>
</template>

<script lang="ts">
import {
  PropType,
  computed,
  defineComponent,
  inject,
  reactive,
  ref,
} from 'vue';
import { off, on } from '@radium-vue/utils/dom';
import {
  ButtonBarConfig,
  Direction,
  SLIDER_PROVIDE_TOKEN,
  SliderProvide,
} from './slider';
export default defineComponent({
  name: 'RaButton',
  components: {},
  props: {
    direction: {
      type: String as PropType<Direction>,
      default: 'x',
    },
  },
  setup(props) {
    const buttonStyle = ref({});
    const buttonRef = ref<HTMLElement>();
    const data = reactive({ distance: 0 });
    const mouse = reactive({ start: 0, end: 0, lastPos: 0 });
    const {
      step,
      isDrag,
      maxValue,
      currentValue,
      sliderDistance,

      ...track
    } = inject<SliderProvide>(SLIDER_PROVIDE_TOKEN, {
      maskAvg: ref(0),
      isDrag: ref(false),
      sliderDistance: ref(0),
      step: ref(0),
      currentValue: ref(0),
      maxValue: ref(0),
      trackWidth: ref(0),
      trackHeight: ref(0),
    });

    const buttonClass = computed(() => {
      let ret = ['ra-slider__button-area'];
      ret = ret.concat(ButtonBarConfig[props.direction].class);
      return ret;
    });
    const distanceAvg = computed(() => {
      return (
        maxValue.value / track[ButtonBarConfig[props.direction].track].value
      );
    });

    // funcs
    const handleButtonMouseUp = () => {
      if (!buttonRef.value) return;

      isDrag.value = false;
      isDrag.value = false;
      mouse.lastPos = data.distance;

      off(document, 'mouseup', handleButtonMouseUp);
      off(document, 'mousemove', handlebuttonDrag);
      off(document, 'mouseleave', handleButtonMouseUp);

      off(buttonRef.value, 'mouseup', handleButtonMouseUp);
      off(buttonRef.value, 'mousemove', handlebuttonDrag);
    };

    const handlebuttonDrag = async (event: Event) => {
      if (!distanceAvg.value) return;
      const trackValue = track[ButtonBarConfig[props.direction].track];
      mouse.end = event[ButtonBarConfig[props.direction].client];
      const moveDistance = mouse.end - mouse.start + mouse.lastPos;
      data.distance = moveDistance;

      if (data.distance < 0) {
        data.distance = 0;
      } else if (data.distance > trackValue.value) {
        data.distance = trackValue.value;
      }

      const stepValue = Math.round(
        data.distance / trackValue.value / (step.value / maxValue.value),
      );

      sliderDistance.value =
        ((stepValue * step.value) / maxValue.value) * trackValue.value;

      buttonStyle.value = {
        [ButtonBarConfig[props.direction]
          .distance]: `${sliderDistance.value}px`,
      };

      await nextTick();
      currentValue.value = step.value * stepValue;
    };

    const buttonMouseDown = (event: MouseEvent) => {
      if (!buttonRef.value) return;

      isDrag.value = true;
      mouse.start = event[ButtonBarConfig[props.direction].client];
      on(buttonRef.value, 'mousemove', handlebuttonDrag);
      on(buttonRef.value, 'mouseup', handleButtonMouseUp);

      on(document, 'mousemove', handlebuttonDrag);
      on(document, 'mouseup', handleButtonMouseUp);
      on(document, 'mouseleave', handleButtonMouseUp);
    };

    const buttonMuseLeave = () => {
      !isDrag.value && (isDrag.value = false);
    };

    const buttonMouseOver = () => {
      isDrag.value = true;
    };
    return {
      data,
      buttonRef,
      buttonClass,
      buttonStyle,

      buttonMouseDown,
      buttonMouseOver,
      buttonMuseLeave,
    };
  },
});
</script>
