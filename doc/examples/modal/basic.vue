<template>
  <ra-row>
    <ra-col>
      <ra-button class="ra-modal-button" @click="openModal"
        >打开对话框</ra-button
      >
    </ra-col>
  </ra-row>
</template>

<script lang="ts">
import { RaModal } from 'radium-vue';

export default defineComponent({
  setup() {
    const content = ref(null);
    function openModal() {
      RaModal.create({
        title: '提示',
        width: '30%',
        content: 'dark soul III',
      }).afterClose.then(() => {
        console.log('ok');
      });
    }
    return {
      content,
      openModal,
    };
  },
});
</script>
