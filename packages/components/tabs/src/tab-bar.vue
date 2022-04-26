<template>
  <div class="ra-tab-bar" :style="barStyle" />
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { TABS_PROVIDE_TOKEN, ITabsProvide } from '.';
export default defineComponent({
  setup() {
    const tabProvide = inject<ITabsProvide>(TABS_PROVIDE_TOKEN);
    const barStyle = computed(() => {
      const ret = [];
      ret.push({ left: tabProvide.currentPosition.value + 'px' });
      ret.push({ width: tabProvide.currentWidth.value + 'px' });
      return ret;
    });

    return {
      barStyle,
    };
  },
});
</script>
