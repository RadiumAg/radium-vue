<template>
  <ra-row>
    <ra-col>
      <ra-button class="ra-message-button" @click="openInfo">消息</ra-button>
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="openSuccess">成功</ra-button>
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="openError">错误</ra-button>
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="openWarning">警告</ra-button>
    </ra-col>
  </ra-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RaMessage } from 'radium-vue';
export default defineComponent({
  methods: {
    openInfo() {
      RaMessage.info({ raMessage: '消息' });
    },
    openSuccess() {
      RaMessage.success({ raMessage: '成功' });
    },
    openError() {
      RaMessage.error({ raMessage: '错误' });
    },
    openWarning() {
      RaMessage.warning({ raMessage: '警告' });
    },
  },
});
</script>
