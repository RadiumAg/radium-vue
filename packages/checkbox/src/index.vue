<template>
  <div>
    <input v-model="a" >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'RaCheckbox',
  props: {},
  setup(props) {
    const a = ref(0);

    return {
      a,
    };
    // init here
  },
});
</script>
<style></style>
