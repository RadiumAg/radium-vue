# Modal对话框
模拟对话框



#### 基本使用

:::demo

```html
<template>
     <template  ref="content">
        <p style="line-height:90px;">消息内容</p>
    </template>
     <template  ref="footer">
         <ra-button></ra-button>
    </template>
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
          const footer = ref(null);
          function openModal(){
              RaModal.create({ 
                  raTitle:'提示', 
                  raFooter: footer.value
              }).afterClose
                .then(()=>{ console.log('ok') });
          }
          return {
              content,
              footer,
              openModal
          }
      }
  })
</script>
```

:::