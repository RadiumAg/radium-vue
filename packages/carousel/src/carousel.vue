<template>
  <div ref="root" class="ra-carousel" :style="{ height: raHeight }">
    <transition>
      <button
        class="ra-carousel__arrow ra-carousel__arrow--left"
        @click="
          --activeIndex;
          thottledArrowClick();
        "
      >
        <i class="ra-icon-arrow-left"> </i>
      </button>
    </transition>

    <transition>
      <button
        class="ra-carousel__arrow ra-carousel__arrow--right"
        @click="
          ++activeIndex;
          thottledArrowClick();
        "
      >
        <i class="ra-icon-arrow-right"> </i>
      </button>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { throttle } from 'lodash';
import {
  defineComponent,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue';
import {
  CAROUSEL_ITEM_PROVIDETOKEN,
  ICarouselItem,
  ICarouselProps,
} from './carousel';
export default defineComponent({
  name: 'RaCarousel',
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
  emits: ['raChange'],
  setup(props: ICarouselProps, { emit }) {
    //ref
    const itemReact = reactive<ICarouselItem[]>([]);
    const root = ref<HTMLDivElement>();
    const offsetWidth = ref<number>();
    const activeIndex = ref<number>(0);

    // watch
    watch(activeIndex, () => {
      emit('raChange');
    });

    // mounted
    onMounted(() => {
      nextTick(() => {
        if (root.value) {
          offsetWidth.value = root.value.offsetWidth;
        }
        resetItemTransition();
      });
    });

    //function
    function resetItemTransition() {
      itemReact.forEach((item, index) => {
        item.transformItem(index, activeIndex.value);
      });
    }

    function transformItem() {
      itemReact.forEach((item, index) => {
        item.transformItem(index, activeIndex.value);
      });
    }

    function RaSetActiveItem(targetIndex: number) {
      activeIndex.value = targetIndex;
    }

    const thottledArrowClick = throttle(
      () => {
        processActiveIndex();
        transformItem();
      },
      300,
      { trailing: true },
    );

    function processActiveIndex() {
      if (activeIndex.value < 0) {
        activeIndex.value = itemReact.length - 1;
      } else if (activeIndex.value > itemReact.length - 1) {
        activeIndex.value = 0;
      }
    }

    const carouselProvide = { itemReact, offsetWidth };
    provide(CAROUSEL_ITEM_PROVIDETOKEN, carouselProvide);
    return {
      props,
      root,
      thottledArrowClick,
      RaSetActiveItem,
      activeIndex,
    };
  },
});
</script>
