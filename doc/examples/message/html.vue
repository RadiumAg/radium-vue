<template>
  <ra-row :gutter="[10]">
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenInfo"
        >html消息</ra-button
      >
    </ra-col>
  </ra-row>
</template>

<script lang="ts" setup>
import { RaMessage } from 'radium-vue';

const handleOpenInfo = () => {
  RaMessage.info({
    message: '<i>dark soul III</i>',
    isUseHtmlString: true,
  });
};
</script>
