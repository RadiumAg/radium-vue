<template>
  <div
    class="ra-row"
    :class="[
      { 'ra-row__host--top': align === 'top' },
      { 'ra-row__host--middle': align === 'middle' },
      { 'ra-row__host--bottom': align === 'bottom' },
      { 'ra-row__host--start': justify === 'start' },
      { 'ra-row__host--center': justify === 'center' },
      { 'ra-row__host--end': justify === 'end' },
      { 'ra-row__host--space-around': justify === 'space-around' },
      { 'ra-row__host--space-between': justify === 'space-between' },
    ]"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, provide } from 'vue';
import { ROW_INJECT_TOKEN } from './grid';
export default defineComponent({
  name: 'RaRow',
  props: {
    align: {
      type: String,
      default: '',
    },
    gutter: {
      type: [Number, Object] as PropType<number | Array<number>>,
      default: () => {
        return 0;
      },
    },
    justify: {
      type: String,
      default: 'flex-start',
    },
  },
  setup(props) {
    // init here
    provide(ROW_INJECT_TOKEN, {
      gutter: props.gutter,
    });

    return {
      props,
    };
  },
});
</script>
