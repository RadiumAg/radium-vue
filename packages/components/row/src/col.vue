<template>
  <div :style="gutterStyle" :class="classList" class="ra-grid">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { PropType, computed, defineComponent, inject } from 'vue';
import { ROW_INJECT_TOKEN, RowInject, SizeObject } from './grid';

export default defineComponent({
  name: 'RaCol',
  props: {
    flex: {
      type: [Number],
      default: 0,
    },
    offset: {
      type: Number,
      default: 0,
    },
    order: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 24,
    },
    span: {
      type: Number,
      default: 0,
    },
    xs: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    sm: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    raMd: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    lg: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    xl: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
    xxl: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => {
        return 0;
      },
    },
  },
  setup(props) {
    const ROW_INJECT = inject<RowInject>(ROW_INJECT_TOKEN);
    const { gutter } = ROW_INJECT;

    // eslint-disable-next-line vue/return-in-computed-property
    const gutterStyle = computed(() => {
      if (typeof gutter === 'number') {
        return {
          ['margin-left']: `${-(gutter / 2)}px`,
          ['padding-left']: `${gutter / 2}px`,
          ['padding-right']: `${gutter / 2}px`,
        };
      } else if (Array.isArray(gutter)) {
        return {
          ['margin-left']: `${-(gutter[0] || 0) / 2}px`,
          ['padding-left']: `${(gutter[0] || 0) / 2}px`,
          ['padding-right']: `${(gutter[0] || 0) / 2}px`,
          ['margin-top']: `${-(gutter[1] || 0) / 2}px`,
          ['padding-top']: `${(gutter[1] || 0) / 2}px`,
          ['padding-bottom']: `${(gutter[1] || 0) / 2}px`,
        };
      }
    });

    const classList = computed(() => {
      const ret: string[] = [];
      const prNormalKey = ['span', 'pull', 'push'] as const;
      const prSizeKey = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

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
        if (pr === 'span' && props[pr]) ret.push(`ra-col-${props[pr]}`);
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
