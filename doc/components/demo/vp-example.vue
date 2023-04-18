<template>
  <div class="vp-example">
    <div>
      <component :is="DemoComponent"></component>
    </div>

    <vp-code :source="source"></vp-code>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import VpCode from './vp-code.vue';

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const DemoComponent = defineAsyncComponent(() => import(props.path));
</script>

<style lang="scss" scoped>
.vp-example {
}

.content {
}
</style>
