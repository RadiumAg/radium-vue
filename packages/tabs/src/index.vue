<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TTabPosition, TTabsType } from '.';
export default defineComponent({
  name: 'RaTabs',
  props: {
    modelValue: {
      type: String,
      defalult: '',
    },
    raType: {
      type: String as PropType<TTabsType>,
      default: 'card',
    },
    raCloseable: {
      type: Boolean,
      default: false,
    },
    raTabPosition: {
      type: String as PropType<TTabPosition>,
      default: 'top',
    },
  },
  emits: ['ra-tab-click', 'ra-tab-remove', 'ra-tab-add', 'ra-edit'],
  setup(props) {
    return {
      props,
    };
  },
});
</script>
<style></style>
