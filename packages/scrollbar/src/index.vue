<template>
  <div
    class="ra-scrollbar ra-scrollbar--scrollbar_hidden"
    @mouseenter="mouseenterHandler"
    @mouseleave="mouseleaveHandler"
  >
    <div
      ref="scrollBarRef"
      class="ra-scrollbar__container"
      :style="[...raWrapStyle, ...style]"
      :class="[
        raNative ? '' : 'ra-scrollbar--scrollbar_hidden',
        ...raWrapClass,
      ]"
      @scroll="scroll"
    >
      <slot></slot>
    </div>
    <div
      v-if="!raNative && data.direction.includes('x')"
      class="ra-scrollbar__horizontal"
    >
      <bar :axis="'x'" />
    </div>
    <div
      v-if="!raNative && data.direction.includes('y')"
      class="ra-scrollbar__vertical"
    >
      <bar :axis="'y'" />
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  provide,
  reactive,
  ref,
} from 'vue';
import { SCROLL_BAR_INJECT_TOKEN, TIndexProps } from '.';
import bar from './bar.vue';
import ResizeObserver from 'resize-observer-polyfill';
import { off, on } from '@radium-vue/utils/dom';
export default defineComponent({
  name: 'RaScrollbar',
  components: {
    bar,
  },
  props: {
    raHeight: {
      type: [String, Number],
      default: 0,
    },
    raMaxHeight: {
      type: [String, Number],
      default: 'unset',
    },
    raNative: {
      type: Boolean,
      defalut: false,
    },
    raWrapStyle: {
      type: [] as PropType<string[]>,
      default: () => {
        debugger;
        return [];
      },
    },
    raWrapClass: {
      type: [] as PropType<string[]>,
      default: () => {
        return [];
      },
    },
  },
  emits: ['scroll'],
  setup(props: Readonly<TIndexProps>, { emit }) {
    const isActive = ref(false);
    const data = reactive<Partial<{ direction: [('x' | 'y')?] }>>({
      direction: [],
    });
    const scrollBarRef = ref<HTMLElement>(null);
    const moveY = ref(0);
    const moveX = ref(0);
    const isHover = ref(false);
    const isMouseHover = ref(false);
    const updateBarSize = ref<() => void>(null);
    const ro = new ResizeObserver(() => {
      if (updateBarSize.value) {
        updateBarSize.value();
      }
      update();
    });

    const style = computed(() => {
      const res = [];
      if (props.raHeight) {
        res.push({ height: props.raHeight });
      }
      if (props.raMaxHeight) {
        res.push({ ['max-height']: props.raMaxHeight });
      }
      return res;
    });

    // fun
    function scroll() {
      moveY.value =
        (scrollBarRef.value.scrollTop / scrollBarRef.value.clientHeight) * 100;
      moveX.value =
        (scrollBarRef.value.scrollLeft / scrollBarRef.value.clientWidth) * 100;
      emit('scroll', [moveY.value, moveX.value]);
    }

    function mouseenterHandler() {
      isHover.value = true;
      isMouseHover.value = true;
    }

    function mouseleaveHandler() {
      isMouseHover.value = false;
      if (isActive.value) return;
      isHover.value = false;
    }

    function update() {
      console.log(
        scrollBarRef.value.scrollHeight,
        scrollBarRef.value.clientHeight,
      );
      data.direction = [];
      if (scrollBarRef.value.scrollHeight > scrollBarRef.value.clientHeight) {
        data.direction.push('y');
      }
      if (scrollBarRef.value.scrollWidth > scrollBarRef.value.clientWidth) {
        data.direction.push('x');
      }
    }

    // lifeCycle
    onMounted(() => {
      nextTick(update);
      ro.observe(scrollBarRef.value);
      on(window, 'resize', update);
    });

    onUnmounted(() => {
      ro.unobserve(scrollBarRef.value);
      off(window, 'resize', update);
    });

    provide(SCROLL_BAR_INJECT_TOKEN, {
      scrollBarRef,
      moveY,
      moveX,
      isHover,
      isActive,
      isMouseHover,
      updateBarSize,
    });

    return {
      style,
      data,
      props,
      scrollBarRef,
      scroll,
      mouseenterHandler,
      mouseleaveHandler,
    };
  },
});
</script>
