<template>
  <div
    ref="buttonRef"
    class="ra-slider__button-area"
    :style="buttonStyle"
    @mouseover="buttonMouseOver"
    @mousedown="buttnMouseDown($event)"
    @mouseleave="buttonMuseLeave"
  >
    <div class="ra-slider__button"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, reactive, ref } from 'vue';
import { off, on } from '@radium-vue/utils/dom';
import {
  ButtonBarConfig,
  SLIDER_PROVIDE_TOKEN,
  TSliderProvide,
} from './slider';
export default defineComponent({
  name: 'RaButton',
  components: {},
  props: {
    direction: {
      type: String,
      default: 'x',
    },
  },
  setup(props) {
    const isDrag = ref(false);
    const oldDistancePercent = ref(0);
    const buttonRef = ref<HTMLElement>();
    const data = reactive({ distance: 0 });
    const mouse = reactive({ start: 0, end: 0, lastLeft: 0 });
    const sliderToken = inject<TSliderProvide>(SLIDER_PROVIDE_TOKEN);
    const maskAvg = computed(() => {
      return Number.parseFloat((sliderToken.step.value / 100).toFixed(2)) * 100;
    });
    const buttonStyle = ref({});

    // funcs
    const buttonMouseUp = () => {
      isDrag.value = false;
      sliderToken.isDrag.value = false;
      mouse.lastLeft = data.distance;
      off(document, 'mouseup', buttonMouseUp);
      off(document, 'mousemove', buttonDrag);
      off(document, 'mouseleave', buttonMouseUp);
      off(buttonRef.value, 'mouseup', buttonMouseUp);
      off(buttonRef.value, 'mousemove', buttonDrag);
    };

    const isDistanceValid = (distancePercent: number) => {
      return (
        Math.abs(Math.round(oldDistancePercent.value - distancePercent)) %
          maskAvg.value ===
        0
      );
    };

    const buttonDrag = (event: MouseEvent) => {
      mouse.end = event[ButtonBarConfig[props.direction].client];
      const distancePercent =
        Number.parseFloat(
          (
            (mouse.end -
              mouse.start +
              (mouse.lastLeft / 100) * sliderToken.trackWidth.value) /
            sliderToken.trackWidth.value
          ).toFixed(2),
        ) * 100;
      if (!isDistanceValid(distancePercent)) {
        return;
      }
      oldDistancePercent.value = distancePercent;
      data.distance = distancePercent;
      if (data.distance < 0) {
        data.distance = 0;
      } else if (data.distance > 100) {
        data.distance = 100;
      }
      sliderToken.sliderDistance.value = data.distance;
      buttonStyle.value = {
        [ButtonBarConfig[props.direction].distance]: data.distance + '%',
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
      buttonStyle,
      buttnMouseDown,
      buttonMouseOver,
      buttonMuseLeave,
    };
  },
});
</script>
