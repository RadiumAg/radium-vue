<template>
  <vp-tool @code-click="handleCodeClick"></vp-tool>
  <p v-show="isHidden" class="code" v-html="decodeSource"></p>
</template>

<script setup lang="ts">
import VpTool from './vp-tool.vue';
const props = defineProps({
  source: {
    type: String,
    required: true,
  },
});
const isHidden = ref(false);
const decodeSource = computed(() => decodeURIComponent(props.source));

const handleCodeClick = () => {
  isHidden.value = !isHidden.value;
};
</script>

<style lang="scss" scoped>
.code {
  white-space: break-spaces;
}
</style>
