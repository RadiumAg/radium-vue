<template>
  <section class="ra-slider">
    <div class="ra-slider__track">
      <div class="ra-slider__progress-bar" :style="processBarStyle"></div>
      <progress-button :direction="raIsVertical? 'y': 'x'" />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref } from 'vue';
import progressButton from './button.vue';
import { SLIDER_PROVIDE_TOKEN, TSliderProvide } from './slider';
export default defineComponent({
  name: 'RaSlider',
  components: {
    progressButton,
  },
  props: {
    modalValue: {
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
      default: 1,
    },
    raShowTooltip: {
      type: Boolean,
      default: false,
    },
    raIsVertical: {
      type: Boolean,
      default: false,
    },
    raHeight: {
      type: Number,
      default: 0,
    },
    raShowStops: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const processBarWidth = ref(0);
    const processBarStyle = computed(() => {
      const ret = [];
      ret.push({ width: processBarWidth.value + '0%' });
      return ret;
    });

    provide<TSliderProvide>(SLIDER_PROVIDE_TOKEN,{
      processBarWidth,
    });

    return {
      props,
      processBarWidth,
      processBarStyle,
    };
  },
});
</script>
