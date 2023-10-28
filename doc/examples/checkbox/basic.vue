<template>
  <ra-check-box v-model="value"></ra-check-box>
</template>

<script lang="ts" setup>
import { RaCheckBox } from '@radium-vue/components';

const value = ref(false);

watch(value, () => {
  console.log(value.value);
});
</script>
