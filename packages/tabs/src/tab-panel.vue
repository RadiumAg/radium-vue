<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    raLabel: {
      type: String,
      default: '',
    },
    raDisabled: {
      type: Boolean,
      default: false,
    },
    raName: {
      type: String,
      default: '',
    },
  },
});
</script>
