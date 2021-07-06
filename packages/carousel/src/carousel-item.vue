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
    function transformItem(
      index: number,
      activeIndex: number,
      isAnimate = true,
    ) {
      if (isAnimate)
        isAnimating(index, activeIndex, CAROUSEL_PROVIDE.itemReact.length);
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

      if (activeIndex === 0 && index === length - 1) {
        index = -1;
      }
      return index;
    }

    // difficult to resolve
    function isAnimating(index: number, activeIndex: number, length: number) {
      data.animating = false;
      if (index === activeIndex) {
        data.animating = true;
      }
      if (CAROUSEL_PROVIDE.direction.value === 'left') {
        if (activeIndex === length - 1 && index === 0) {
          data.animating = true;
        } else if (index === activeIndex + 1) {
          data.animating = true;
        }
      } else if (CAROUSEL_PROVIDE.direction.value === 'right') {
        if (activeIndex === 0 && index === length - 1) {
          data.animating = true;
        } else if (index === activeIndex - 1) {
          data.animating = true;
        }
      }
    }

    addCarouseItem();
    return { props, itemStyle, data };
  },
});
</script>
