<template>
  <ra-row :gutter="[10]">
    <ra-col>
      <ra-button class="ra-modal-button" @click="openModal('info')"
        >Info</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-modal-button" @click="openModal('success')"
        >Success</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-modal-button" @click="openModal('error')"
        >Error</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-modal-button" @click="openModal('warning')"
        >Warning</ra-button
      >
    </ra-col>
    <ra-col>
      <ra-button class="ra-modal-button" @click="openModal('confirm')"
        >Confirm</ra-button
      >
    </ra-col>
  </ra-row>
</template>

<script lang="ts">
import { RaModal } from 'radium-vue';
export default defineComponent({
  setup() {
    const content = ref();

    function openModal(type: string) {
      RaModal[type]({
        title: '提示',
        content: 'dark soul III',
      });
    }

    return {
      content,
      openModal,
    };
  },
});
</script>
