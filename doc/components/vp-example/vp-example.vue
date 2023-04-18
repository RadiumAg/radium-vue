<template>
  <div class="vp-example">
    <div>
      <component :is="DemoComponent"></component>
    </div>
    <vp-code :source="source"></vp-code>
  </div>
</template>

<script setup lang="ts">
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

const DemoComponent = defineAsyncComponent(
  () => import(/* @vite-ignore */ props.path),
);
</script>

<style lang="scss" scoped>
.vp-example {
  padding: 15px;
  overflow: hidden;
  margin: 15px 0;
  border-radius: 6px 6px 0 0;
  border: 1px solid #efefef;
}

.content {
}
</style>
