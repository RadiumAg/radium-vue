<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TPlacement, TToolTipProps } from '.';
export default defineComponent({
  name: 'RaTooltip',
  props: {
    raEffect: {
      type: String as PropType<TToolTipProps>,
      default: 'light',
    },
    raContent: {
      type: String,
      default: '',
    },
    raPlacement: {
      type: String as PropType<TPlacement>,
      default: 'bottom',
    },
    raDisabled: {
      type: Boolean,
      default: false,
    },
    raOffset: {
      type: Number,
      default: 0,
    },
    raVisibleArrow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    // init here
  },
});
</script>
<style></style>
