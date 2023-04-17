<template>
  <div class="vp-example">
    <div>
      <component :is="DemoComponent"></component>
    </div>

    <div class="content" v-text="decodeSource"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
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

const decodeSource = computed(() => decodeURIComponent(props.source));
</script>

<style lang="scss" scoped>
.vp-example {
}

.content {
}
</style>
