<template>
  <div
    class="ra-row"
    :class="[
      { 'ra-row__host--top': raAlign === 'top' },
      { 'ra-row__host--middle': raAlign === 'middle' },
      { 'ra-row__host--bottom': raAlign === 'bottom' },
      { 'ra-row__host--start': raJustify === 'start' },
      { 'ra-row__host--center': raJustify === 'center' },
      { 'ra-row__host--end': raJustify === 'end' },
      { 'ra-row__host--space-around': raJustify === 'space-around' },
      { 'ra-row__host--space-between': raJustify === 'space-between' },
    ]"
  >
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, provide } from 'vue';
import { IColProps, ROW_INJECT_EOKEN } from './grid';
export default defineComponent({
  name: 'RaRow',
  props: {
    raAlign: {
      type: String,
      default: '',
    },
    raGutter: {
      type: [Number, Object] as PropType<number | Array<number>>,
      default: () => {
        return 0;
      },
    },
    raJustify: {
      type: String,
      default: 'flex-start',
    },
  },
  setup(props: IColProps) {
    // init here
    provide(ROW_INJECT_EOKEN, {
      gutter: props.raGutter,
    });

    return {
      props,
    };
  },
});
</script>
