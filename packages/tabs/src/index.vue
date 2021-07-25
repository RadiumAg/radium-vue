<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RaTabs',
  props: {
    modelValue: {
      type: String,
      defalult: '',
    },
    raType: {
      type: String,
      default:
    },
  },
  setup(props) {},
});
</script>
<style></style>
