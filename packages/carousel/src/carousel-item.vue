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
  CAROUSEL_ITEM_PROVIDETOKEN,
  ICarouselItemProps,
  CarouselItemConfig,
  ICarouselProvide,
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
    console.log(CAROUSEL_PROVIDE);
    let direction: 'horizontal' | 'vertical' = undefined;

    watchEffect(() => {
      direction = CAROUSEL_PROVIDE.offsetWidth.value
        ? 'horizontal'
        : 'vertical';
      console.log(direction);
    });

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
      itemStyle.value = `${CarouselItemConfig[direction].translate}(${(index -
        activeIndex) *
        CAROUSEL_PROVIDE[CarouselItemConfig[direction].offset].value}px)`;
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
