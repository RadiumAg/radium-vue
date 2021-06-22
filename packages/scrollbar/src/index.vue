<template>
  <div ref="scrollBarRef" class="ra-scrollbar">
    <slot></slot>
  </div>
  <div>
    <bar />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';
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
  setup(props) {
    const scrollBarRef = reactive<HTMLElement>(null);

    provide(SCROLL_BAR_INJECT_TOKEN, {
      scrollBarRef,
    });
    return {
      props,
      scrollBarRef,
    };
  },
});
</script>
<style></style>
