<template>
  <div
    ref="buttonRef"
    class="ra-slider__button-area"
    :style="{ left: data.buttonLeft + '%' }"
    @mousedown="buttnMouseDown($event)"
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
  props: {
    direction: {
      type: String,
      default: 'x',
    },
  },
  setup(props) {
    const buttonRef = ref<HTMLElement>();
    const oldDistancePercent = ref(0);
    const data = reactive({ buttonLeft: 0 });
    const mouse = reactive({  start: 0,  end: 0,  lastLeft: 0 });
    const sliderToken = inject<TSliderProvide>(SLIDER_PROVIDE_TOKEN);
    const maskAvg = computed(() => {
      return Number.parseFloat((sliderToken.step.value / 100).toFixed(2)) * 100;
    });

    // funcs
    const buttonMouseUp = () => {
      mouse.lastLeft = data.buttonLeft;
      off(document, 'mouseup', buttonMouseUp);
      off(document, 'mousemove', buttonDrag);
      off(buttonRef.value, 'mouseup', buttonMouseUp);
      off(buttonRef.value, 'mousemove', buttonDrag);
    };

    const isDistanceValid = (distancePercent:number) => {
      return Math.abs(Math.round(oldDistancePercent.value - distancePercent))% maskAvg.value === 0;
    };

    const buttonDrag = (event: MouseEvent) => {
      mouse.end = event[ButtonBarConfig[props.direction].client];
      const distancePercent = Number.parseFloat(((mouse.end - mouse.start + (mouse.lastLeft / 100) * sliderToken.trackWidth.value) / sliderToken.trackWidth.value).toFixed(2) ) * 100;
      if (!isDistanceValid(distancePercent)) {
        return;
      }
      oldDistancePercent.value = distancePercent;
      data.buttonLeft = distancePercent;
      if (data.buttonLeft < 0) {
        data.buttonLeft = 0;
      } else if (data.buttonLeft > 100) {
        data.buttonLeft = 100;
      }
      sliderToken.sliderDistance.value = data.buttonLeft;
    };

    const buttnMouseDown = (event: MouseEvent) => {
      mouse.start = event[ButtonBarConfig[props.direction].client];
      on(buttonRef.value, 'mouseup', buttonMouseUp);
      on(buttonRef.value, 'mousemove', buttonDrag);
      on(document, 'mousemove', buttonDrag);
      on(document, 'mouseup', buttonMouseUp);
    };

    return {
      data,
      buttonRef,
      buttnMouseDown,
    };
  },
});
</script>
