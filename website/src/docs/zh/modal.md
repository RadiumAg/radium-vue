# Modal对话框
模拟对话框



#### 基本使用

:::demo

```html
<template>
    <template ref="content" #content></template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-message-button" @click="openModal">打开对话框</ra-button>
        </ra-col>
     </ra-row>
</template>

<script>
  import { defineComponent, h } from 'vue';
  import { RaModal } from 'radium-vue';
  export default defineComponent({
      setup(){
          const content = ref(null);
          function openModal(){
              RaModal.create({ raMessage: '消息', raTitle:'提示'}).afterClose.then(console.log);
          }
          return {
              content,
              openModal
          }
      }
  })
</script>
```

:::