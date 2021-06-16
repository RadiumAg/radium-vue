<template>
  <div :style="gutterStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject, PropType } from 'vue';
import { IRowInject, ROW_INJECT_EOKEN, SizeObject } from './grid';

export default defineComponent({
  name: 'ElGrid',
  props: {
    raFlex: {
      type: Object,
      defalut: null,
    },
    raOffset: {
      type: Number,
      defalut: null,
    },
    raOrder: {
      type: Number,
      defalut: null,
    },
    raPull: {
      type: Number,
      defalut: null,
    },
    raPush: {
      type: Number,
      defalut: null,
    },
    raSpan: {
      type: Number,
      defalut: null,
    },
    raXs: {
      type: [Object, Object] as PropType<number | SizeObject>,
      defalut: null,
    },
    raSm: {
      type: [Object, Object] as PropType<number | SizeObject>,
      defalut: null,
    },
    raMd: {
      type: [Object, Object] as PropType<number | SizeObject>,
      defalut: null,
    },
    raLg: {
      type: [Object, Object] as PropType<number | SizeObject>,
      defalut: null,
    },
    raXl: {
      type: [Object, Object] as PropType<number | SizeObject>,
      defalut: null,
    },
    raXXl: {
      type: [Object, Object] as PropType<number | SizeObject>,
      defalut: null,
    },
  },
  setup(props) {
    const ROW_INJECT = inject<IRowInject>(ROW_INJECT_EOKEN);
    const { gutter } = ROW_INJECT;

    // eslint-disable-next-line vue/return-in-computed-property
    const gutterStyle = computed(() => {
      if (typeof gutter === 'number') {
        return {
          ['padding-left']: gutter / 2 + 'px',
          ['padding-right']: gutter / 2 + 'px',
        };
      } else if (typeof gutter === 'object') {
        return {
          ['padding-left']: gutter[0] / 2 + 'px',
          ['padding-right']: gutter[1] / 2 + 'px',
          ['padding-bottom']: gutter[2] / 2 + 'px',
          ['padding-top']: gutter[3] / 2 + 'px',
        };
      }
    });

    return {
      props,
      gutterStyle,
    };
  },
});
</script>
<style></style>
