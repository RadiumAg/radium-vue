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
  watchEffect,
} from 'vue';
import {
  CAROUSEL_ITEM_PROVIDE_TOKEN,
  CarouselItemConfig,
  CarouselProvide,
} from './carousel';
export default defineComponent({
  name: 'RaCarouselItem',
  props: {
    raName: {
      type: String,
      default: '',
    },
    raLabel: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const itemStyle = ref<string>('');
    const CAROUSEL_PROVIDE = inject<CarouselProvide>(
      CAROUSEL_ITEM_PROVIDE_TOKEN,
    );
    const data = reactive<{
      active: boolean;
      animating: boolean;
    }>({ active: false, animating: false });

    let direction: 'horizontal' | 'vertical' = 'horizontal';

    function transformItem(
      index: number,
      activeIndex: number,
      isAnimate = true,
    ) {
      if (!CAROUSEL_PROVIDE) return;

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
      if (!CAROUSEL_PROVIDE) return;

      itemStyle.value = `${CarouselItemConfig[direction].translate}(${
        (index - activeIndex) *
        CAROUSEL_PROVIDE[CarouselItemConfig[direction].offset].value
      }px)`;
    }

    function addCarouseItem() {
      if (!CAROUSEL_PROVIDE || !instance) return;

      CAROUSEL_PROVIDE.itemReact.push({
        transformItem,
        uid: instance.uid,
      });
    }

    function processIndex(index: number, activeIndex: number, length: number) {
      if (!CAROUSEL_PROVIDE!.isLoop.value) {
        return index;
      }
      if (activeIndex === length - 1 && index === 0) {
        index = length;
      } else if (activeIndex === 0 && index === length - 1) {
        index = -1;
      }
      return index;
    }

    // difficult to resolve
    function isAnimating(index: number, activeIndex: number, length: number) {
      data.animating = false;
      if (!CAROUSEL_PROVIDE!.isLoop.value) {
        data.animating = true;
        return;
      }
      if (
        index === activeIndex ||
        index === CAROUSEL_PROVIDE!.oldActiveIndex.value
      ) {
        data.animating = true;
      }

      if (
        (activeIndex === 0 &&
          CAROUSEL_PROVIDE!.oldActiveIndex.value === length - 1) ||
        (activeIndex === length - 1 &&
          CAROUSEL_PROVIDE!.oldActiveIndex.value === 0)
      ) {
        return;
      }

      if (activeIndex > CAROUSEL_PROVIDE!.oldActiveIndex.value!) {
        if (
          index <= activeIndex &&
          index >= CAROUSEL_PROVIDE!.oldActiveIndex.value!
        ) {
          data.animating = true;
        }
      } else if (
        activeIndex < CAROUSEL_PROVIDE!.oldActiveIndex.value! &&
        index >= activeIndex &&
        index <= CAROUSEL_PROVIDE!.oldActiveIndex.value!
      ) {
        data.animating = true;
      }
    }

    watchEffect(() => {
      direction = CAROUSEL_PROVIDE!.offsetWidth.value
        ? 'horizontal'
        : 'vertical';
    });

    addCarouseItem();

    return { props, itemStyle, data };
  },
});
</script>
