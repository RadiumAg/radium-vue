# Message 全局提示

直接使用`radium-vue` 暴露的`RaMessage` 类进行创建。



#### 基础使用

使用`create`方法创建全局消息

:::demo 

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-message-button" @click="openInfo">消息提示</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button" @click="openVnode">使用VNode</ra-button>
        </ra-col>
     </ra-row>
</template>

<script>
  import { defineComponent, h } from 'vue';
  import { RaMessage } from 'radium-vue';
  export default defineComponent({
      methods:{
          openInfo(){
              RaMessage.create({ raMessage: '消息'});
        },
          openVnode(){
              RaMessage.create({ raMessage: h('p', null, [
              h('span', null, '内容可以是 '),
              h('i', { style: 'color: teal' }, 'VNode')])
          });
        },
      }
  })
</script>
```

:::





#### 快捷方式

使用`success`,`warning`,`error`,`info`方法创建对应的消息类型。

:::demo 

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-message-button" @click="openInfo">消息</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button" @click="openSuccess">成功</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button"  @click="openError">错误</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button" @click="openWarning">警告</ra-button>
        </ra-col>
     </ra-row>
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



#### 增加可关闭

使用`success`,`warning`,`error`,`info`方法创建对应的消息类型。

:::demo 

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-message-button"  @click="openInfo">消息</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button"  @click="openSuccess">成功</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button" @click="openError">错误</ra-button>
        </ra-col>
        <ra-col>
            <ra-button class="ra-message-button" @click="openWarning">警告</ra-button>
        </ra-col>
     </ra-row>
</template>

<script>
  import { defineComponent } from 'vue';
  import { RaMessage } from 'radium-vue';
  export default defineComponent({
      methods:{
          openInfo(){
              RaMessage.info({ raMessage: '消息', raShowClose: true});
        },
          openSuccess(){
              RaMessage.success({ raMessage: '成功', raShowClose: true});
        },
          openError(){
              RaMessage.error({ raMessage: '错误', raShowClose: true});
        },
          openWarning(){
              RaMessage.warning({ raMessage: '警告', raShowClose: true});
        }
      }
  })
</script>
```

:::



#### 使用HTML片段

`raMessage`也可以传`html`标签,但是`html`有风险，使用需谨慎，容易被`XSS`攻击

:::demo 

```html
<template>
    <ra-row>
        <ra-col>
            <ra-button class="ra-message-button"  @click="openInfo">html消息</ra-button>
        </ra-col>
     </ra-row>
</template>

<script>
  import { defineComponent } from 'vue';
  import { RaMessage } from 'radium-vue';
  export default defineComponent({
      methods:{
          openInfo(){
              RaMessage.info({ raMessage: '<i>dark soul III</i>', raIsUseHtmlString: true});
        }
      }
  })
</script>
```

:::



#### 全局使用

已经将`raMessage`附加到`globalProperties`属性上，可以使用`this.ra_message$`进行调用。



#### Message Api

| 参数              | 说明                 | 类型      | 可选值                                   | 默认值 |
| :---------------- | :------------------- | --------- | :--------------------------------------- | ------ |
| raMessage         | 消息文本             | string    | ——                                       | ——     |
| raType            | 消息类型             | string    | 'success' \|'warning' \|'info' \|'error' | ——     |
| raIconClass       | 自定义消息icon       | string    | ——                                       | ——     |
| raDuration        | 消息存在的时间       | number    | ——                                       | 3000   |
| raShowClose       | 是否显示关闭消息按钮 | boolean   | ——                                       | false  |
| raOffset          | 消息间隔距离         | number    | ——                                       | 20     |
| raIsUseHtmlString | 是否使用html进行显示 | boolean   | ——                                       | false  |
| raOnClose         | 消息关闭时回调       | ( )=>void | ——                                       | ——     |



