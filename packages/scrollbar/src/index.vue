<template>
  <div class="ra-scrollbar ra-scrollbar--scrollbar_hidden">
    <div
      ref="scrollBarRef"
      class="ra-scrollbar--scrollbar_hidden ra-scrollbar__container"
      :style="style"
      @scroll="scroll"
    >
      <slot></slot>
    </div>
    <div v-if="data.direction === 'x'" class="ra-scrollbar__horizontal">
      <bar :axis="data.direction" />
    </div>
    <div v-if="data.direction === 'y'" class="ra-scrollbar__vertical">
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
      defalut: false,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const data = reactive<{ direction: 'x' | 'y' }>({ direction: 'x' });
    const scrollBarRef = ref<HTMLElement>(null);
    const moveY = ref<number>(0);
    const moveX = ref<number>(0);

    const style = computed(() => {
      const res = [];
      if (props.raHeight) {
        res.push({ height: props.raHeight });
      } else if (props.raMaxHeight) {
        res.push({ ['max-height']: props.raMaxHeight });
      }
      return res;
    });

    onMounted(() => {
      debugger;
      if (scrollBarRef.value.scrollHeight > scrollBarRef.value.clientHeight) {
        data.direction = 'y';
      } else if (
        scrollBarRef.value.scrollWidth > scrollBarRef.value.clientWidth
      ) {
        data.direction = 'x';
      }
    });

    // fun
    function scroll() {
      moveY.value =
        (scrollBarRef.value.scrollTop / scrollBarRef.value.clientHeight) * 100;
      console.log(moveY.value);
      emit('scroll', [moveY.value, moveX.value]);
    }

    provide(SCROLL_BAR_INJECT_TOKEN, {
      scrollBarRef,
      moveY,
    });

    return {
      style,
      data,
      props,
      scrollBarRef,
      scroll,
    };
  },
});
</script>
