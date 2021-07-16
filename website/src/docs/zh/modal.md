# Modal对话框
模拟对话框



#### 基本使用

:::demo

```html
<template>
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
      methods:{
          openModal(){
              RaModal.create({ raMessage: '消息'}).afterClose.then(console.log);
        }
      }
  })
</script>
```

:::