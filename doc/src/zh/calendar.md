# Calendar 日历

日历控件，可选择日期

#### 基础使用

::: demo
calendar/basic
:::

#### 自定义格式

::: demo
calendar/custom
:::

#### 限制范围

::: demo

calendar/range

:::

#### Calendar Api

| 参数               | 说明         | 类型    | 可选值 | 默认值 |
| :----------------- | :----------- | ------- | :----- | ------ |
| modelValue/v-model | 当前选中日期 | Date    | ——     | ——     |
| ra-range           | 范围         | Date[ ] | ——     | ——     |

#### Carousel default slots

| 参数 | 说明                                       | 类型   | 可选值 | 默认值 |
| :--- | :----------------------------------------- | ------ | :----- | ------ |
| data | isSelected:是否选中, date:日期，month:日期 | Object | ——     | ——     |
