<template>
  <div
    ref="buttonRef"
    class="ra-slider__button-area"
    :class="buttonClass"
    :style="buttonStyle"
    @mouseover="buttonMouseOver"
    @mousedown="buttnMouseDown($event)"
    @mouseleave="buttonMuseLeave"
  >
    <div class="ra-slider__button" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  PropType,
  reactive,
  ref,
} from 'vue';
import { off, on } from '@radium-vue/utils/dom';
import {
  ButtonBarConfig,
  SLIDER_PROVIDE_TOKEN,
  TDirection,
  TSliderProvide,
} from './slider';
export default defineComponent({
  name: 'RaButton',
  components: {},
  props: {
    direction: {
      type: String as PropType<TDirection>,
      default: 'x',
    },
  },
  setup(props) {
    const isDrag = ref(false);
    const buttonStyle = ref({});
    const oldDistancePercent = ref(0);
    const buttonRef = ref<HTMLElement>();
    const data = reactive({ distance: 0 });
    const mouse = reactive({ start: 0, end: 0, lastPos: 0 });
    const sliderToken = inject<TSliderProvide>(SLIDER_PROVIDE_TOKEN);
    const maskAvg = computed(() => {
      return (
        Number.parseFloat(
          (sliderToken.step.value / sliderToken.maxValue.value).toFixed(2),
        ) * 100
      );
    });
    const buttonClass = computed(() => {
      let ret = ['ra-slider__button-area'];
      ret = ret.concat(ButtonBarConfig[props.direction].class);
      return ret;
    });
    const distanceAvg = computed(() => {
      return (
        sliderToken.maxValue.value /
        sliderToken[ButtonBarConfig[props.direction].track].value
      );
    });

    // funcs
    const buttonMouseUp = () => {
      isDrag.value = false;
      sliderToken.isDrag.value = false;
      mouse.lastPos = data.distance;
      off(document, 'mouseup', buttonMouseUp);
      off(document, 'mousemove', buttonDrag);
      off(document, 'mouseleave', buttonMouseUp);
      off(buttonRef.value, 'mouseup', buttonMouseUp);
      off(buttonRef.value, 'mousemove', buttonDrag);
    };

    const buttonDrag = (event: MouseEvent) => {
      mouse.end = event[ButtonBarConfig[props.direction].client];
      const distancePercent =
        Number.parseFloat(
          (
            (mouse.end -
              mouse.start +
              (mouse.lastPos / 100) *
                sliderToken[ButtonBarConfig[props.direction].track].value) /
            sliderToken[ButtonBarConfig[props.direction].track].value
          ).toFixed(2),
        ) * 100;

      oldDistancePercent.value = distancePercent;
      data.distance = distancePercent;
      if (data.distance < 0) {
        data.distance = 0;
      } else if (data.distance > 100) {
        data.distance = 100;
      }

      const distance = Math.round(
        distanceAvg.value *
          data.distance *
          sliderToken[ButtonBarConfig[props.direction].track].value,
      );
      sliderToken.maskAvg.value = maskAvg.value;
      buttonStyle.value = {
        [ButtonBarConfig[props.direction].distance]: distance + 'px',
      };
    };

    const buttnMouseDown = (event: MouseEvent) => {
      isDrag.value = true;
      mouse.start = event[ButtonBarConfig[props.direction].client];
      on(buttonRef.value, 'mousemove', buttonDrag);
      on(buttonRef.value, 'mouseup', buttonMouseUp);
      on(document, 'mousemove', buttonDrag);
      on(document, 'mouseup', buttonMouseUp);
      on(document, 'mouseleave', buttonMouseUp);
    };

    const buttonMuseLeave = () => {
      !isDrag.value && (sliderToken.isDrag.value = false);
    };

    const buttonMouseOver = () => {
      sliderToken.isDrag.value = true;
    };
    return {
      data,
      buttonRef,
      buttonClass,
      buttonStyle,
      buttnMouseDown,
      buttonMouseOver,
      buttonMuseLeave,
    };
  },
});
</script>
