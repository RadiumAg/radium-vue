<template>
  <ra-row>
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenInfo"
        >消息提示</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-message-button" @click="handleOpenVNode"
        >使用VNode</ra-button
      >
    </ra-col>
  </ra-row>
</template>

<script lang="ts" setup>
import { RaMessage } from 'radium-vue';

const handleOpenInfo = () => {
  RaMessage.create({ raMessage: '消息' });
};

const handleOpenVNode = () => {
  RaMessage.create({
    raMessage: h('p', null, [
      h('span', null, '内容可以是 '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  });
};
</script>
