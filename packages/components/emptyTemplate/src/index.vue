<template>
  <slot :props="$props"></slot>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RaEmptyTemplate',
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
});
</script>
