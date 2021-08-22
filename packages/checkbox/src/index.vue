<template>
  <div>
    <input type="checkbox" >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RaCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      props,
    };
    // init here
  },
});
</script>
<style></style>
