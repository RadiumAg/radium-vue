<template>
  <ra-tabs v-model="modelValue" ra-type="border-card">
    <ra-tab-panel ra-label="电脑" ra-name="computed">电脑</ra-tab-panel>
    <ra-tab-panel ra-label="手机" ra-name="phone">手机</ra-tab-panel>
    <ra-tab-panel ra-label="冰箱" ra-name="Refrigerator">冰箱</ra-tab-panel>
  </ra-tabs>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
  setup() {
    const modelValue = ref('computed');
    watch(modelValue, () => {
      console.log(modelValue.value);
    });
    return {
      modelValue,
    };
  },
});
</script>
