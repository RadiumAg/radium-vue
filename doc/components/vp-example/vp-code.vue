<template>
  <vp-tool></vp-tool>
  <p class="code" v-show="isHidden" v-html="decodeSource"></p>
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
</script>

<style lang="scss" scoped>
.code {
  white-space: break-spaces;
}
</style>
