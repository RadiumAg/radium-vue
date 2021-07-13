# Message全局提示



#### 基础使用

:::demo 

```html
<template>
	<ra-button @click="openInfo">消息提示</ra-button>
</template>

<script>
  import { defineComponent } from 'vue';
  import { RaMessage } from 'radium-vue';
  export default defineComponent({
      methods:{
          openInfo(){
              RaMessage.success({ raMessage: '消息提示'});
        }
      }
  })
</script>
```

:::

