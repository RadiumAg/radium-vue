<template>
  <div
    class="ra-carousel__carousel-item"
    :style="{ transform: itemStyle }"
    :class="{ 'is-animating': data.animating }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  inject,
  reactive,
  ref,
} from 'vue';
import {
  CAROUSEL_ITEM_PROVIDETOKEN,
  ICarouselItemProps,
  ICarouselProvide,
} from './carousel';
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
  setup(props: ICarouselItemProps) {
    const instance = getCurrentInstance();
    const itemStyle = ref<string>('');
    const CAROUSEL_PROVIDE = inject<ICarouselProvide>(
      CAROUSEL_ITEM_PROVIDETOKEN,
    );
    const data = reactive<{
      active: boolean;
      animating: boolean;
    }>({ active: false, animating: false });

    // fun
    function transformItem(index: number, activeIndex: number) {
      index = processIndex(
        index,
        activeIndex,
        CAROUSEL_PROVIDE.itemReact.length,
      );
      calcTransform(index, activeIndex);
    }

    function calcTransform(index: number, activeIndex: number) {
      itemStyle.value = `translateX(${(index - activeIndex) *
        CAROUSEL_PROVIDE.offsetWidth.value}px)`;
    }

    function addCarouseItem() {
      CAROUSEL_PROVIDE.itemReact.push({
        transformItem,
        uid: instance.uid,
      });
    }

    function processIndex(index: number, activeIndex: number, length: number) {
      if (activeIndex === length - 1 && index === 0) {
        index = length;
      }
      return index;
    }

    addCarouseItem();

    return { props, itemStyle, data };
  },
});
</script>
