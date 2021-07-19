<template>
  <section class="ra-slider">
    <div class="ra-slider__track">
      <div class="ra-slider__progress-bar" :style="processBarStyle"></div>
      <div class="ra-slider__button-area">
        <div class="ra-slider__button"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'RaSlider',
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

    return {
      props,
      processBarWidth,
      processBarStyle,
    };
  },
});
</script>
