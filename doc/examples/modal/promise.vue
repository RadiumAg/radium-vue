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
        raTitle: '提示',
        raWidth: '30%',
        raContent: 'dark soul III',
        raOnOk: async () => {
          await new Promise(resolve => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        },
      });
    }
    return {
      content,
      openModal,
    };
  },
});
</script>
