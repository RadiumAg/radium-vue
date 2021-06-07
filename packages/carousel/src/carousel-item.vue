<template>
  <div class="ra-carousel__carousel-item"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { CarouselProps } from './carousel';
export default defineComponent({
  name: 'RaCarouselItem',
  props: {
    raName: {
      type: String,
      defalut: '',
    },
    raLabel: {
      type: String,
      defalut: '',
    },
  },
  setup(props: CarouselProps) {
    const instance = getCurrentInstance();
    function transformItem(index: number, activeIndex: number) {}

    function calcTransform(index, activeIndex) {}

    return { props };
  },
});
</script>
