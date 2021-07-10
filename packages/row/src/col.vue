<template>
  <div :style="gutterStyle" :class="classList" class="ra-grid">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject, PropType } from 'vue';
import { IRowInject, IrowProps, ROW_INJECT_EOKEN, SizeObject } from './grid';

export default defineComponent({
  name: 'RaCol',
  props: {
    raFlex: {
      type: Number,
      default: null,
    },
    raOffset: {
      type: Number,
      default: null,
    },
    raOrder: {
      type: Number,
      default: null,
    },
    raPull: {
      type: Number,
      default: null,
    },
    raPush: {
      type: Number,
      default: 24,
    },
    raSpan: {
      type: Number,
      default: null,
    },
    raXs: {
      type: [Object, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    raSm: {
      type: [Object, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    raMd: {
      type: [Object, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    raLg: {
      type: [Object, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    raXl: {
      type: [Object, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    raXXl: {
      type: [Object, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
  },
  setup(props: IrowProps) {
    const ROW_INJECT = inject<IRowInject>(ROW_INJECT_EOKEN);
    const { gutter } = ROW_INJECT;

    // eslint-disable-next-line vue/return-in-computed-property
    const gutterStyle = computed(() => {
      if (typeof gutter === 'number') {
        return {
          ['margin-left']: -(gutter / 2) + 'px',
          ['padding-left']: gutter / 2 + 'px',
          ['padding-right']: gutter / 2 + 'px',
        };
      } else if (gutter instanceof Array) {
        return {
          ['margin-left']: -(gutter[0] || 0) / 2 + 'px',
          ['padding-left']: (gutter[0] || 0) / 2 + 'px',
          ['padding-right']: (gutter[0] || 0) / 2 + 'px',
          ['margin-top']: -(gutter[1] || 0) / 2 + 'px',
          ['padding-top']: (gutter[1] || 0) / 2 + 'px',
          ['padding-bottom']: (gutter[1] || 0) / 2 + 'px',
        };
      }
    });

    const classList = computed(() => {
      const ret = [];
      const prNormalKey = ['raSpan', 'raPull', 'raPush', 'raSpan'] as const;
      const prSizeKey = ['raXs', 'raSm', 'raMd', 'raLg', 'raXl', 'raXXl'];

      prSizeKey.forEach(pr => {
        if (typeof props[pr] === 'number')
          ret.push(`ra-col-${pr}-${props[pr]}`);
        else if (typeof props[pr] === 'object') {
          const sizeProp = props[pr] as { span: number; offset: number };
          if (sizeProp.span) {
            ret.push(`ra-col-${pr}-${props[pr]}`);
          } else if (sizeProp.offset) {
            ret.push(`ra-col-${pr}-offset-${props[pr]}`);
          }
        }
      });

      prNormalKey.forEach(pr => {
        if (pr === 'raSpan' && props[pr]) ret.push(`ra-col-${props[pr]}`);
        else if (props[pr]) ret.push(`ra-col-${pr}-${props[pr]}`);
      });
      return ret;
    });

    return {
      props,
      gutterStyle,
      classList,
    };
  },
});
</script>
