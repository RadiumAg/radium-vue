<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { CarouselProps } from './carousel';
export default defineComponent({
  name: 'CarouselItem',
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
  setup(props: CarouselProps, { emit }) {
    const instance = getCurrentInstance();
    function transformItem(index: number, activeIndex: number) {}

    function calcTransform(index, activeIndex) {}
  },
});
</script>
