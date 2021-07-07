<template>
  <button v-ripple class="ra-button" style="position:relative">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RaButton',
  props: {
    raType: {
      type: String,
      default: 'defalut',
    },
  },
  setup(porps) {
    // init here
  },
});
</script>
<style></style>
