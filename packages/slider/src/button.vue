<template>
  <div
    ref="buttonRef"
    class="ra-slider__button-area"
    :style="{ left: data.buttonLeft + 'px' }"
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
    const sliderToken = inject<TSliderProvide>(SLIDER_PROVIDE_TOKEN);
    const buttonRef = ref<HTMLElement>();
    const data = reactive({
      buttonLeft: 0,
    });
    const maskFlag = computed(() => {
      const res = sliderToken.trackWidth.value / sliderToken.maxValue.value;
      return res;
    });
    const mouse = {
      start: 0,
      end: 0,
      lastLeft: 0,
    };

    const buttonMouseUp = () => {
      mouse.lastLeft = data.buttonLeft;
      off(document, 'mouseup', buttonMouseUp);
      off(document, 'mousemove', buttonDrag);
      off(buttonRef.value, 'mouseup', buttonMouseUp);
      off(buttonRef.value, 'mousemove', buttonDrag);
    };

    const buttonDrag = (event: MouseEvent) => {
      const distance = mouse.end - mouse.start + mouse.lastLeft;
      mouse.end = event[ButtonBarConfig[props.direction].client];

      data.buttonLeft = distance;
      if (data.buttonLeft < 0) {
        data.buttonLeft = 0;
      } else if (data.buttonLeft > sliderToken.trackWidth.value) {
        data.buttonLeft = sliderToken.trackWidth.value;
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
