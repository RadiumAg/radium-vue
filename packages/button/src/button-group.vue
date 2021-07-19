<template>
  <div class="ra-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RaButtonGroup',
  setup(props,{ slots }){
    console.log(slots.default());
  },
});
</script>
