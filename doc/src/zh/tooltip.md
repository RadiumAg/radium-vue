# tooltip 提示

常用于悬浮目标展示额外信息。



#### 基础使用

::: demo

```html
<template>
     <div class="left">
        <ra-tooltip ra-content="left-start文字" ra-placement="left-start">
          <ra-button>左上</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="left文字" ra-placement="left">
          <ra-button>左边</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="left-end文字" ra-placement="left-end">
          <ra-button>左下</ra-button>
        </ra-tooltip>
    </div>
    <div class="top">
        <ra-tooltip ra-content="top-start文字" ra-placement="top-start">
          <ra-button>上左</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="top文字" ra-placement="top">
          <ra-button>上边</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="top-end文字" ra-placement="top-end">
          <ra-button>上右</ra-button>
        </ra-tooltip>
    </div>
     <div class="right">
        <ra-tooltip ra-content="right-start文字" ra-placement="right-start">
          <ra-button>上左</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="right文字" ra-placement="right">
          <ra-button>上边</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="right-end文字" ra-placement="right-end">
          <ra-button>上右</ra-button>
        </ra-tooltip>
    </div>

    <div class="bottom">
        <ra-tooltip ra-content="bottom-start文字" ra-placement="bottom-start">
          <ra-button>下左</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="bottom文字" ra-placement="bottom">
          <ra-button>下边</ra-button>
        </ra-tooltip>

        <ra-tooltip ra-content="bottom-end文字" ra-placement="bottom-end">
          <ra-button>下右</ra-button>
        </ra-tooltip>
    </div>
</template>
```

:::

#### 切换主题

提供了`dark`和`light`两种主题



::: demo

```html
<template>
    <ra-tooltip ra-content="light主题" ra-placement="top" ra-effect="light" >
        <ra-button>light</ra-button>
    </ra-tooltip>
    <ra-tooltip ra-content="dark主题" ra-placement="bottom">
        <ra-button>dark</ra-button>
    </ra-tooltip>
</template>
```

:::

#### 更多Content

使用`content`具名插槽书写很多内容。

::: demo

```html
<template>
    <ra-tooltip  ra-placement="top">
        <ra-button>使用template</ra-button>
        <template #content>
         第一行文本<br/>第二行文本
        </template>
    </ra-tooltip>
</template>
```

:::


#### Tooltip Api

| 参数            | 说明                                      | 类型          | 可选值                                                       | 默认值 |
| :-------------- | :---------------------------------------- | ------------- | :----------------------------------------------------------- | ------ |
| model-value     | 是否显示                                  | boolean       | ——                                                           | ——     |
| ra-appendtobody | 选项卡样式                                | boolean       | ——                                                           | false  |
| ra-effect       | 主题                                      | dark \| light | ——                                                           | dark   |
| re-content      | 现实的内容，也可通过`slot#content`转入DOM | string        | ——                                                           | ——     |
| ra-placement    | Tooltip出现的位置                         | string        | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | ——     |

