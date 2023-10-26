<template>
  <div class="ra-tab-bar" :style="barStyle"></div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue';
import { TABS_PROVIDE_TOKEN } from '.';
export default defineComponent({
  setup() {
    const tabProvide = inject(TABS_PROVIDE_TOKEN);

    const barStyle = computed(() => {
      const ret: Record<string, string>[] = [];
      ret.push(
        { left: `${tabProvide?.currentPosition.value}px` },
        { width: `${tabProvide?.currentWidth.value}px` },
      );
      return ret;
    });

    return {
      barStyle,
    };
  },
});
</script>
