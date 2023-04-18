<template>
  <ra-row>
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
  RaMessage.info({ raMessage: '消息', raShowClose: true });
};
const handleOpenSuccess = () => {
  RaMessage.success({ raMessage: '成功', raShowClose: true });
};
const handleOpenError = () => {
  RaMessage.error({ raMessage: '错误', raShowClose: true });
};
const handleOpenWarning = () => {
  RaMessage.warning({ raMessage: '警告', raShowClose: true });
};
</script>
