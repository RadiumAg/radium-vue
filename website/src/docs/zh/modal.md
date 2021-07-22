# Modal 对话框
模拟对话框，在个人的实际开发中，发现`暴露接口`的创建方式是最多用的方式，所以本组件只实现了`接口方式`。



#### 基本使用

使用`create`方法，设置`raContent`和`raTitle`即可实现一个简单的对话框。

:::demo

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-modal-button" @click="openModal">打开对话框</ra-button>
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
              RaModal.create({ 
                  raTitle:'提示',
                  raWidth: '30%',
                  raContent: 'dark soul III',
              }).afterClose
                .then(()=>{ console.log('ok') });
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



#### 异步使用

`raOnOk`或者`raOnCancel` 设置为`Promise`类型可以自动实现异步。

:::demo

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-modal-button" @click="openModal">打开对话框</ra-button>
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
              RaModal.create({ 
                  raTitle:'提示', 
                  raWidth: '30%',
                  raContent: 'dark soul III',
                  raOnOk: async ()=>{ 
                      await new Promise(resolve => { 
                         	setTimeout(()=>{
                                resolve();
                            },2000) 
                      }) 
                    }
                  });
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



#### 快捷方式

`接口`提供了`warning`,`info`,`success`,`error`,`comfirm` 的方式。

:::demo

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-modal-button" @click="openModal('info')">Info</ra-button>
        </ra-col>
         <ra-col>
            <ra-button class="ra-modal-button" @click="openModal('success')">Success</ra-button>
        </ra-col>
         <ra-col>
            <ra-button class="ra-modal-button" @click="openModal('error')">Error</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-modal-button" @click="openModal('warning')">Warning</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-modal-button" @click="openModal('confirm')">Confirm</ra-button>
        </ra-col>
     </ra-row>
</template>

<script>
  import { defineComponent, h } from 'vue';
  import { RaModal } from 'radium-vue';
  export default defineComponent({
      setup(){
          const content = ref(null);
          const isLoading = ref(false);
          
          function openModal(type:string){
              RaModal[type]({ 
                  raTitle:'提示', 
                  raContent: 'dark soul III',
                  });
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

#### Message Api

| 参数          | 说明                 | 类型            | 可选值 | 默认值 |
| :------------ | :------------------- | --------------- | :----- | ------ |
| raType        | 对话框类型           | string          | ——     | ——     |
| raTop         | 对话框离窗口顶部距离 | string          | ——     | 15vh   |
| raModal       | 是否开启遮罩层       | boolean         | ——     | false  |
| raDropClose   | 点击遮罩层是否关闭   | boolean         | ——     | true   |
| raShowClose   | 是否显示关闭消息按钮 | boolean         | ——     | true   |
| raWidth       | 消息间隔距离         | string          | ——     | 50%    |
| raContent     | 消息内容             | string \| vNode | ——     | false  |
| raTitle       | 对话框标题           | string \|vNode  | ——     | ——     |
| raFooter      | 对话框底部           | string \|vNode  | ——     | ——     |
| raOnOk        | 确认按钮后的回调     | ()=>void        | ——     | ——     |
| raOnCancel    | 取消后的回调         | ()=>void        | ——     | ——     |
| raOkLabel     | 确认按钮文字         | string          | ——     | '确认' |
| raCancelLabel | 取消按钮文字         | string          | ——     | '取消' |



