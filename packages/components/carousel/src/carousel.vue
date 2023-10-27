<template>
  <div
    ref="root"
    class="ra-carousel"
    :style="{ height: height }"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <transition name="carousel-arrow-left">
      <button
        v-if="direction === 'horizontal' && data.hover"
        class="ra-carousel__arrow ra-carousel__arrow--left"
        @click.stop="throttledArrowClick('left')"
      >
        <i class="ra-icon-arrow-left"></i>
      </button>
    </transition>

    <transition name="carousel-arrow-right">
      <button
        v-if="direction === 'horizontal' && data.hover"
        class="ra-carousel__arrow ra-carousel__arrow--right"
        @click.stop="throttledArrowClick('right')"
      >
        <i class="ra-icon-arrow-right"></i>
      </button>
    </transition>
    <slot></slot>
    <div
      class="ra-carousel__indicator"
      :class="[
        direction === 'horizontal'
          ? 'ra-carousel__indicator--horizontal'
          : direction === 'vertical'
          ? 'ra-carousel__indicator--vertical'
          : '',
      ]"
    >
      <div
        v-for="(item, index) in data.itemReactLength"
        :key="index"
        class="ra-carousel__item"
        @click="indicatorClick(index)"
      >
        <button
          class="ra-carousel__button"
          :class="{
            'is-active': index === activeIndex,
            'ra-carousel__button--horizontal': direction === 'horizontal',
            'ra-carousel__button--vertical': direction === 'vertical',
          }"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { throttle } from 'lodash';
import ResizeObserver from 'resize-observer-polyfill';
import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue';
import {
  CAROUSEL_ITEM_PROVIDE_TOKEN,
  CarouselItem,
  ClickType,
} from './carousel';
export default defineComponent({
  name: 'RaCarousel',
  props: {
    height: {
      type: String,
      default: '',
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 1000,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
    pauseOnHover: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    //ref
    const itemReact = reactive<CarouselItem[]>([]);
    const root = ref<HTMLDivElement>();
    const offsetWidth = ref<number>();
    const offsetHeight = ref<number>();
    const activeIndex = ref(0);
    const oldActiveIndex = ref(0);
    const timerSign = ref<any>(null);
    const ro = new ResizeObserver(setTheOffset);
    const data = reactive({
      hover: false,
      itemReactLength: 0,
    });

    //function
    function resetItemTransition() {
      itemReact.forEach((item, index) => {
        item.transformItem(index, activeIndex.value, false);
      });
    }

    function setTheOffset() {
      if (!root.value) return;

      props.direction === 'horizontal'
        ? (offsetWidth.value = root.value.offsetWidth)
        : (offsetHeight.value = root.value.offsetHeight);
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

    function indicatorClick(index: number) {
      setTheOldActiveIndex();
      activeIndex.value = index;
    }

    const throttledArrowClick = throttle((clickType: ClickType) => {
      setTheOldActiveIndex();
      if (clickType === 'left') {
        activeIndex.value = activeIndex.value - 1;
      } else if (clickType === 'right') {
        activeIndex.value = activeIndex.value + 1;
      }
      processActiveIndex();
    }, 400);

    function processActiveIndex() {
      if (activeIndex.value < 0) {
        activeIndex.value = itemReact.length - 1;
      } else if (activeIndex.value > itemReact.length - 1) {
        activeIndex.value = 0;
      }
    }

    function autoplay() {
      if (!props.autoplay) return;
      timerSign.value = setInterval(() => {
        setTheOldActiveIndex();
        activeIndex.value++;
        processActiveIndex();
      }, props.interval);
    }

    function setTheOldActiveIndex() {
      oldActiveIndex.value = activeIndex.value;
    }

    //methods
    function raSetActiveItem(targetIndex: number) {
      setTheOldActiveIndex();
      activeIndex.value = targetIndex;
    }

    function raPrev() {
      setTheOldActiveIndex();
      activeIndex.value--;
    }

    function raNext() {
      setTheOldActiveIndex();
      activeIndex.value++;
    }

    // watch
    watch(activeIndex, () => {
      transformItem();
      emit('change', activeIndex);
    });

    // mounted
    onMounted(() => {
      if (!root.value) return;

      activeIndex.value = props.initialIndex;
      autoplay();
      ro.observe(root.value);
      setTheOffset();
      nextTick(() => {
        resetItemTransition();
      });
      data.itemReactLength = itemReact.length;
    });

    onUnmounted(() => {
      ro.disconnect();
      clearInterval(timerSign.value);
    });

    provide(CAROUSEL_ITEM_PROVIDE_TOKEN, {
      offsetHeight,
      itemReact,
      offsetWidth,
      oldActiveIndex,
      isLoop: toRefs(props).loop,
    });

    return {
      indicatorClick,
      props,
      root,
      data,
      activeIndex,
      throttledArrowClick,

      raSetActiveItem,
      handleMouseEnter,
      handleMouseLeave,
      raPrev,
      raNext,
    };
  },
});
</script>
