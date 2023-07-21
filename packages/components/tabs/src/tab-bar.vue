<template>
  <div class="ra-tab-bar" :style="barStyle"></div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue';
import { TABS_PROVIDE_TOKEN, TabsProvide } from '.';
export default defineComponent({
  setup() {
    const tabProvide = inject<TabsProvide>(TABS_PROVIDE_TOKEN);
    const barStyle = computed(() => {
      const ret = [];
      ret.push(
        { left: `${tabProvide.currentPosition.value}px` },
        { width: `${tabProvide.currentWidth.value}px` },
      );
      return ret;
    });

    return {
      barStyle,
    };
  },
});
</script>
