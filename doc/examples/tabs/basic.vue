<template>
  <ra-tabs v-model="modelValue">
    <ra-tab-panel label="电脑" name="computed">电脑</ra-tab-panel>
    <ra-tab-panel label="手机" name="phone">手机</ra-tab-panel>
    <ra-tab-panel label="冰箱" name="refrigerator">冰箱</ra-tab-panel>
  </ra-tabs>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
  setup() {
    const modelValue = ref('phone');

    return {
      modelValue,
    };
  },
});
</script>
