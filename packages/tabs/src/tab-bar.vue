<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { TABS_PROVIDE_TOKEN, TTabPosition } from '.';
export default defineComponent({
  setup() {
    const tabProvide = inject<TTabPosition>(TABS_PROVIDE_TOKEN);
    const barStyle = computed(() => {});

    return {;
      barStyle,
    };
  },
});
</script>
