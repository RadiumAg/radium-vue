<template>
  <p class="code" v-html="source"></p>
</template>

<script setup lang="ts">
const props = defineProps({
  source: {
    type: String,
    required: true,
  },
});

const decodeSource = computed(() => props.source);
</script>

<style lang="scss" scoped>
.code {
  white-space: break-spaces;
}
</style>
