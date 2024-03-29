<template>
  <div
    class="ra-scrollbar ra-scrollbar--scrollbar_hidden"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="scrollBarRef"
      class="ra-scrollbar__container"
      :style="[...wrapStyle, ...style]"
      :class="[native ? '' : 'ra-scrollbar--scrollbar_hidden', ...wrapClass]"
      @scroll="handleScroll"
    >
      <slot></slot>
    </div>
    <div
      v-if="!native && data.direction!.includes('x')"
      class="ra-scrollbar__horizontal"
    >
      <bar :axis="'x'"></bar>
    </div>
    <div
      v-if="!native && data.direction!.includes('y')"
      class="ra-scrollbar__vertical"
    >
      <bar :axis="'y'"></bar>
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
  provide,
  reactive,
  ref,
} from 'vue';
import ResizeObserver from 'resize-observer-polyfill';
import { off, on } from '@radium-vue/utils/dom';
import { addUnit } from '@radium-vue/utils/common';
import bar from './bar.vue';
import { SCROLL_BAR_INJECT_TOKEN } from '.';

export default defineComponent({
  name: 'RaScrollbar',
  components: {
    bar,
  },
  props: {
    height: {
      type: [String, Number],
      default: 0,
    },
    maxHeight: {
      type: [String, Number],
      default: 'unset',
    },
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: Array as PropType<string[]>,
      default: () => {
        return [];
      },
    },
    wrapClass: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  emits: ['ra-scroll'],
  setup(props, { emit }) {
    const isActive = ref(false);
    const data = reactive<Partial<{ direction: [('x' | 'y')?] }>>({
      direction: [],
    });
    const moveY = ref(0);
    const moveX = ref(0);
    const isHover = ref(false);
    const isMouseHover = ref(false);
    const scrollBarRef = ref<HTMLElement>();
    const updateBarSize = ref<() => void>();
    const ro = new ResizeObserver(updateTheConfig);

    const style = computed(() => {
      const res: Record<string, number | string | undefined>[] = [];
      if (props.height) {
        res.push({ height: addUnit(props.height) });
      }
      if (props.maxHeight) {
        res.push({ ['max-height']: addUnit(props.maxHeight) });
      }
      return res;
    });

    async function updateTheConfig() {
      await nextTick();
      update();
      updateBarSize.value && updateBarSize.value();
    }

    function handleScroll() {
      if (!scrollBarRef.value) return;

      moveY.value =
        (scrollBarRef.value.scrollTop / scrollBarRef.value.clientHeight) * 100;
      moveX.value =
        (scrollBarRef.value.scrollLeft / scrollBarRef.value.clientWidth) * 100;
      emit('ra-scroll', [
        scrollBarRef.value.scrollLeft,
        scrollBarRef.value.scrollTop,
      ]);
    }

    function handleMouseenter() {
      isHover.value = true;
      isMouseHover.value = true;
    }

    function handleMouseLeave() {
      isMouseHover.value = false;
      if (isActive.value) return;
      isHover.value = false;
    }

    function update() {
      scrollBarRef.value &&
        (() => {
          data.direction = [];
          if (
            scrollBarRef.value.scrollHeight > scrollBarRef.value.clientHeight
          ) {
            data.direction.push('y');
          }
          if (scrollBarRef.value.scrollWidth > scrollBarRef.value.clientWidth) {
            data.direction.push('x');
          }
        })();
    }

    // lifeCycle
    onMounted(async () => {
      if (!scrollBarRef.value) return;

      ro.observe(scrollBarRef.value);
      on(window, 'resize', updateTheConfig);
    });

    onUnmounted(() => {
      ro.disconnect();
      off(window, 'resize', updateTheConfig);
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
      handleScroll,
      handleMouseenter,
      handleMouseLeave,
    };
  },
});
</script>
