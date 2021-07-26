<template>
  <div>
    <slot></slot>
    <tab-bar />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TTabPosition, TTabsType } from '.';
import TabBar from './tab-bar.vue';
export default defineComponent({
  name: 'RaTabs',
  components: {
    TabBar,
  },
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
