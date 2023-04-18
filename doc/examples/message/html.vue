<template>
  <ra-row>
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
    raMessage: '<i>dark soul III</i>',
    raIsUseHtmlString: true,
  });
};
</script>
