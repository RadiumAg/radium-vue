<template>
  <div
    ref="buttonRrf"
    class="ra-slider__button-area"
    :style="[{'left': data.processBarWidth * 100 + '%'}]"
    @mousedown="buttnMouseDown($event)"
  >
    <div class="ra-slider__button"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, reactive, ref } from '@vue/runtime-core';
import { on } from 'packages/utils/dom';
import { SLIDER_PROVIDE_TOKEN, TSliderProvide } from './slider';
export default defineComponent({
  name:'RaButton',
  props: {
    direction: {
      type:String,
      default: 'x',
    },
  },
  setup(props){
    const sliderToken = inject<TSliderProvide>(SLIDER_PROVIDE_TOKEN);
    const buttonRrf = ref<HTMLElement>();
    const data = reactive({
      processBarWidth: sliderToken.processBarWidth,
    });
    const mouseDown = {
      x: {
        startX:0,
      },
    };
    const buttnMouseDown = (event:MouseEvent)=>{
      mouseDown[props.direction].start = event[props.direction];
    };

    return {
      data,
      buttonRrf,
      buttnMouseDown,
    };
  },
});
</script>
