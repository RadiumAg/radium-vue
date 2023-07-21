# Scrollbar 滚动条

#### 竖向滚动

  最基本得滚动，设置`ra-height`滚动条高度后就可以使用

:::demo
scrollbar/vertical
:::

#### 横向滚动

​	默认滚动容器得`宽度`为`100%`,超出宽度后自动出现滚动条

:::demo
scrollbar/horizontal
:::

#### Scrollbar Api

| 参数          | 说明               | 类型      | 可选值 | 默认值 |
| :------------ | :----------------- | --------- | :----- | ------ |
| height     | 滚动条高度         | string    | ——     | ——     |
| max-height | 滚动条最大高度     | string    | ——     | ——     |
| native     | 是否使用原生滚动条 | boolean   | ——     | ——     |
| wrap-style | 滚动容器行内样式   | string[ ] | ——     | ——     |
| wrap-class | 滚动容器自定义类名 | string[ ] | ——     | ——     |

#### Events

| 参数      | 说明               | 回调参数               |
| :-------- | :----------------- | ---------------------- |
| scroll | 滚动时报告滚动位置 | [scrollLeft,ScrollTop] |

