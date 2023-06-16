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
    const isDrag = ref(false);
    const buttonStyle = ref({});
    const buttonRef = ref<HTMLElement>();
    const data = reactive({ distance: 0 });
    const mouse = reactive({ start: 0, end: 0, lastPos: 0 });
    const sliderToken = inject<SliderProvide>(SLIDER_PROVIDE_TOKEN);

    const buttonClass = computed(() => {
      let ret = ['ra-slider__button-area'];
      ret = ret.concat(ButtonBarConfig[props.direction].class);
      return ret;
    });
    const distanceAvg = computed(() => {
      if (!sliderToken) return;

      return (
        sliderToken.maxValue.value /
        sliderToken[ButtonBarConfig[props.direction].track].value
      );
    });

    // funcs
    const handleButtonMouseUp = () => {
      if (!buttonRef.value || !sliderToken) return;

      isDrag.value = false;
      sliderToken.isDrag.value = false;
      mouse.lastPos = data.distance;

      off(document, 'mouseup', handleButtonMouseUp);
      off(document, 'mousemove', handlebuttonDrag);
      off(document, 'mouseleave', handleButtonMouseUp);

      off(buttonRef.value, 'mouseup', handleButtonMouseUp);
      off(buttonRef.value, 'mousemove', handlebuttonDrag);
    };

    const handlebuttonDrag = (event: Event) => {
      if (!sliderToken || !distanceAvg.value) return;

      mouse.end = event[ButtonBarConfig[props.direction].client];

      const moveDistance = mouse.end - mouse.start + mouse.lastPos;
      data.distance = moveDistance;

      if (data.distance < 0) {
        data.distance = 0;
      } else if (
        data.distance >
        sliderToken[ButtonBarConfig[props.direction].track].value
      ) {
        data.distance =
          sliderToken[ButtonBarConfig[props.direction].track].value;
      }

      sliderToken.sliderDistance.value = data.distance;
      buttonStyle.value = {
        [ButtonBarConfig[props.direction].distance]: `${data.distance}px`,
      };
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      !isDrag.value && (sliderToken!.isDrag.value = false);
    };

    const buttonMouseOver = () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      sliderToken!.isDrag.value = true;
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
