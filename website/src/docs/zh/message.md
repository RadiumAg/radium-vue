# Message全局提示



#### 基础使用

:::demo 

```html
<template>
	<ra-button @click="openInfo">消息</ra-button>
	<ra-button @click="openSuccess">成功</ra-button>
	<ra-button @click="openError">错误</ra-button>
	<ra-button @click="openWarning">警告</ra-button>
</template>

<script>
  import { defineComponent } from 'vue';
  import { RaMessage } from 'radium-vue';
  export default defineComponent({
      methods:{
          openInfo(){
              RaMessage.info({ raMessage: '消息'});
        },
          openSuccess(){
              RaMessage.success({ raMessage: '成功'});
        },
          openError(){
              RaMessage.error({ raMessage: '错误'});
        },
          openWarning(){
              RaMessage.warning({ raMessage: '警告'});
        }
      }
  })
</script>
```

:::

