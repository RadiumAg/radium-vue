<template>
  <template ref="title">
    <p style="line-height: 20px">自定义标题</p>
  </template>

  <template ref="content">
    <p style="line-height: 20px">自定义内容</p>
  </template>

  <template ref="footer">
    <ra-row justify="end">
      <ra-col>
        <ra-button
          class="ra-modal-button"
          type="primary"
          @click="
            () => {
              modalInstance.close();
            }
          "
          >关闭对话框</ra-button
        >
      </ra-col>
    </ra-row>
  </template>
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
    const title = ref();
    const content = ref();
    const footer = ref();
    const modalInstance = ref();

    function openModal() {
      modalInstance.value = RaModal.create({
        title: title.value,
        content: content.value,
        footer: footer.value,
        width: '30%',
      });
    }

    return {
      title,
      content,
      footer,
      modalInstance,

      openModal,
    };
  },
});
</script>
