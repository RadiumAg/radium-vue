# tooltip 提示

常用于悬浮目标展示额外信息。


#### 基础使用

::: demo
tooltip/basic
:::

#### 切换主题

提供了`dark`和`light`两种主题



::: demo
tooltip/theme
:::

#### 更多Content

使用`content`具名插槽书写很多内容。

::: demo
tooltip/content
:::


#### Tooltip Api

| 参数            | 说明                                      | 类型          | 可选值                                                       | 默认值 |
| :-------------- | :---------------------------------------- | ------------- | :----------------------------------------------------------- | ------ |
| model-value     | 是否显示                                  | boolean       | ——                                                           | ——     |
| ra-appendtobody | 选项卡样式                                | boolean       | ——                                                           | false  |
| ra-effect       | 主题                                      | dark \| light | ——                                                           | dark   |
| re-content      | 现实的内容，也可通过`slot#content`转入DOM | string        | ——                                                           | ——     |
| ra-placement    | Tooltip出现的位置                         | string        | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | ——     |

