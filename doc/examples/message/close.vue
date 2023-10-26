<template>
  <ra-row :gutter="[10]">
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenInfo"
        >消息</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenSuccess"
        >成功</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenError"
        >错误</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenWarning"
        >警告</ra-button
      >
    </ra-col>
  </ra-row>
</template>

<script lang="ts" setup>
import { RaMessage } from 'radium-vue';

const handleOpenInfo = () => {
  RaMessage.info({ message: '消息', showClose: true });
};
const handleOpenSuccess = () => {
  RaMessage.success({ message: '成功', showClose: true });
};
const handleOpenError = () => {
  RaMessage.error({ message: '错误', showClose: true });
};
const handleOpenWarning = () => {
  RaMessage.warning({ message: '警告', showClose: true });
};
</script>
