<template>
  <div class="vp-tool">
    <code-icon class="code" @click="$emit('codeClick')"></code-icon>
  </div>
</template>

<script setup lang="ts">
import CodeIcon from '~icons/carbon/code';

defineEmits(['codeClick']);
</script>

<style lang="scss" scoped>
.vp-tool {
  display: flex;
  padding: 10px 0;
  margin-top: 15px;
  border-bottom: 1px dashed #efefef;

  .code {
    cursor: pointer;
  }
}
</style>
