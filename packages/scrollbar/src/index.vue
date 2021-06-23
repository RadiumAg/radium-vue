<template>
  <div
    class="ra-scrollbar ra-scrollbar--scrollbar_hidden"
    @mouseenter="mouseenterHandler"
    @mouseleave="mouseleaveHandler"
  >
    <div
      ref="scrollBarRef"
      class="ra-scrollbar__container"
      :style="style"
      :class="{ 'ra-scrollbar--scrollbar_hidden': !raNative }"
      @scroll="scroll"
    >
      <slot></slot>
    </div>
    <div
      v-if="!raNative && data.direction === 'x'"
      class="ra-scrollbar__horizontal"
    >
      <bar :axis="data.direction" />
    </div>
    <div
      v-if="!raNative && data.direction === 'y'"
      class="ra-scrollbar__vertical"
    >
      <bar :axis="data.direction" />
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  provide,
  reactive,
  ref,
} from 'vue';
import { SCROLL_BAR_INJECT_TOKEN } from '.';
import bar from './bar.vue';
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
      defalut: true,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const isActive = ref(false);
    const data = reactive<Partial<{ direction: 'x' | 'y' }>>({
      direction: 'x',
    });
    const scrollBarRef = ref<HTMLElement>(null);
    const moveY = ref(0);
    const moveX = ref(0);
    const isHover = ref(false);
    const isMouseHover = ref(false);

    const style = computed(() => {
      const res = [];
      if (props.raHeight) {
        res.push({ height: props.raHeight });
      } else if (props.raMaxHeight) {
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

    // lifeCycle
    onMounted(() => {
      if (scrollBarRef.value.scrollHeight > scrollBarRef.value.clientHeight) {
        data.direction = 'y';
      } else if (
        scrollBarRef.value.scrollWidth > scrollBarRef.value.clientWidth
      ) {
        data.direction = 'x';
      }
    });

    provide(SCROLL_BAR_INJECT_TOKEN, {
      scrollBarRef,
      moveY,
      moveX,
      isHover,
      isActive,
      isMouseHover,
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
