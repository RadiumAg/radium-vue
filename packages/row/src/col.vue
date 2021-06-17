<template>
  <div :style="gutterStyle" :class="classList">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject, PropType } from 'vue';
import { IRowInject, ROW_INJECT_EOKEN, SizeObject } from './grid';

export default defineComponent({
  name: 'RaCol',
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
      defalut: 24,
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

    const classList = computed(() => {
      const ret = [];
      const prNormalKey = ['raSpan', 'raPull', 'raPush', 'raSpan'] as const;
      const prSizeKey = ['raXs', 'raSm', 'raMd', 'raLg', 'raXl', 'raXXl'];

      prNormalKey.forEach(pr => {
        if (pr === 'raSpan' && props[pr]) ret.push(`ra-col-${props[pr]}`);
        else if (props[pr]) ret.push(`ra-col-${pr}-${props[pr]}`);
      });
      return ret;

      prSizeKey.forEach(pr => {
        if (typeof pr === 'number') ret.push(`ra-col-${pr}-${props[pr]}`);
        else if (typeof pr === 'object') {
          const sizeProp = props[pr] as { span: number; offset: number };
          if (sizeProp.span) {
            ret.push(`ra-col-${pr}-${props[pr]}`);
          } else if (sizeProp.offset) {
            ret.push(`ra-col-${pr}-offset-${props[pr]}`);
          }
        }
      });
    });

    return {
      props,
      gutterStyle,
      classList,
    };
  },
});
</script>
<style></style>
