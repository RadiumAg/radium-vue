# Tabs 标签页

#### 基础使用

::: demo
tabs/basic
:::

#### 卡片化

设置`raType`为`card`可以设置为选项卡类型

::: demo
tabs/cards
:::

#### 边框卡片

设置`raType`为`border-card`可以设置为选项卡类型

::: demo
tabs/border-card
:::

#### 删除标签页

::: demo
tabs/close
:::

#### 添加标签页

::: demo
tabs/add
:::

#### raTabs Api

| 参数         | 说明                   | 类型                      | 可选值 | 默认值 |
| :----------- | :--------------------- | ------------------------- | :----- | ------ |
| model-value  | 当前选中的 tab 的 name | string                    | ——     | ——     |
| ra-type      | 选项卡样式             | 'card'\|'border-card'\|'' | ——     | ''     |
| ra-closeable | 是否显示开启按钮       | boolean                   | ——     | false  |

#### raTabs Event

| 参数        | 说明         | 回调参数                              |
| :---------- | :----------- | ------------------------------------- |
| raTabClick  | 标签页点击   | 当前选中的 tab 的 name,没有则为 index |
| raTabRemove | 删除按钮点击 | 当前删除的 tab 的 name,没有则为 index |

#### raTabPanel Api

| 参数        | 说明                     | 类型    | 可选值 | 默认值 |
| :---------- | :----------------------- | ------- | :----- | ------ |
| ra-label    | 标题                     | string  | ——     | ——     |
| ra-name     | 名称，没有则默认为 index | string  | ——     | ——     |
| ra-disabled | 是否开启                 | boolean | ——     | false  |
