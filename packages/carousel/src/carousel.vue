<template>
  <div
    ref="root"
    class="ra-carousel"
    :style="{ height: raHeight }"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <transition name="carousel-arrow-left">
      <button
        v-if="data.hover"
        class="ra-carousel__arrow ra-carousel__arrow--left"
        @click.stop="thottledArrowClick('left')"
      >
        <i class="ra-icon-arrow-left"> </i>
      </button>
    </transition>

    <transition name="carousel-arrow-right">
      <button
        v-if="data.hover"
        class="ra-carousel__arrow ra-carousel__arrow--right"
        @click.stop="thottledArrowClick('right')"
      >
        <i class="ra-icon-arrow-right"> </i>
      </button>
    </transition>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { flatten, throttle } from 'lodash';
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue';
import {
  CAROUSEL_ITEM_PROVIDETOKEN,
  ICarouselItem,
  TCarouselProps,
  TClickType,
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
      type: Boolean,
      defalut: true,
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
  setup(props: Readonly<TCarouselProps>, { emit }) {
    //ref
    const itemReact = reactive<ICarouselItem[]>([]);
    const root = ref<HTMLDivElement>();
    const offsetWidth = ref<number>();
    const activeIndex = ref<number>(0);
    const timerSign = ref<any>(null);
    const data = reactive({
      hover: false,
    });

    // watch
    watch(activeIndex, () => {
      emit('raChange');
    });

    // mounted
    onMounted(() => {
      autoplay();
      nextTick(() => {
        if (root.value) {
          offsetWidth.value = root.value.offsetWidth;
          window.addEventListener('resize', () => {
            offsetWidth.value = root.value.offsetWidth;
          });
          resetItemTransition();
        }
      });
    });

    // ondestroy
    onUnmounted(() => {
      clearInterval(timerSign.value);
    });

    //function
    function resetItemTransition() {
      itemReact.forEach((item, index) => {
        item.transformItem(index, activeIndex.value);
      });
      console.log(itemReact);
    }

    function handleMouseEnter() {
      data.hover = true;
      clearInterval(timerSign.value);
    }

    function handleMouseLeave() {
      data.hover = false;
      autoplay();
    }

    function transformItem() {
      itemReact.forEach((item, index) => {
        item.transformItem(index, activeIndex.value);
      });
    }

    function RaSetActiveItem(targetIndex: number) {
      activeIndex.value = targetIndex;
    }

    const thottledArrowClick = throttle((clickType: TClickType) => {
      if (clickType === 'left') {
        activeIndex.value = activeIndex.value - 1;
      } else if (clickType === 'right') {
        activeIndex.value = activeIndex.value + 1;
      }
      processActiveIndex();
      transformItem();
    }, 400);

    function processActiveIndex() {
      if (activeIndex.value < 0) {
        activeIndex.value = itemReact.length - 1;
      } else if (activeIndex.value > itemReact.length - 1) {
        activeIndex.value = 0;
      }
    }

    //methods
    function autoplay() {
      if (!props.raAutoplay) return;
      timerSign.value = setInterval(() => {
        activeIndex.value++;
        processActiveIndex();
        transformItem();
      }, props.raInterval);
    }

    const carouselProvide = { itemReact, offsetWidth };
    provide(CAROUSEL_ITEM_PROVIDETOKEN, carouselProvide);
    return {
      props,
      root,
      thottledArrowClick,
      data,
      RaSetActiveItem,
      activeIndex,
      handleMouseEnter,
      handleMouseLeave,
    };
  },
});
</script>
