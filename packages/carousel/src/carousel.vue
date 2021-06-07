<template>
  <div ref="root" style="{height: height}">
    <transition>
      <button>
        <i class="ra-icon-arrow-right"> </i>
      </button>
    </transition>

    <transition>
      <button>
        <i class="ra-icon-arrow-left"> </i>
      </button>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, provide, ref, watch } from 'vue';
import { CarouselItem, CarouselProps } from './carousel';
export default defineComponent({
  name: 'RaCarousel',
  emit: ['raChange'],
  props: {
    raHeight: {
      type: String,
      defalut: '',
    },
    raInitialIndex: {
      type: Number,
      defalut: 0,
    },
    raAutoplay: {
      type: Boolean,
      defalut: false,
    },
    raInterval: {
      type: Number,
      defalut: 0,
    },
    raArrow: {
      type: String,
      defalut: 'always',
    },
    raType: {
      type: String,
      defalut: undefined,
    },
    raLoop: {
      type: String,
      defalut: '',
    },
    raDirection: {
      type: String,
      defalut: 'horizontal',
    },
    raPauseOnHover: {
      type: Boolean,
      defalut: false,
    },
  },
  setup(props: CarouselProps, { emit }) {
    //ref

    const ItemRef = ref<CarouselItem[]>();
    const root = ref<HTMLDivElement>();
    const currentIndex = ref<number>();
    const offsetWidht = ref<number>();
    const activeIndex = ref<number>(0);

    // watch the change and commit
    watch(currentIndex, () => {
      emit('raChange');
    });

    onMounted(() => {
      nextTick(() => {
        if (root.value) {
          offsetWidht.value = root.value.offsetWidth;
        }
      });
    });

    const transformItem = () => {};

    const RaSetActiveItem = (targetIndex: number) => {};

    const RaPrev = () => {
      activeIndex.value = activeIndex.value - 1;
    };
    const RaNext = () => {
      activeIndex.value = activeIndex.value + 1;
    };

    const carouselProvide = { ItemRef };
    provide('carouselProvide', carouselProvide);
    return {
      props,
      root,
      RaPrev,
      RaNext,
      RaSetActiveItem,
    };
  },
});
</script>
