# Carousel 轮播

#### 基本使用

配合`ra-carousel`和`ra-carousel-item`就能完成一个基本的轮播

::: demo
carousel/basic
:::

#### 垂直方向

设置`ra-direction`为`vertical`变成垂直方向滚动

::: demo
carousel/vertical
:::



#### 自动轮播

设置`ra-autoplay`变成自动轮播

::: demo
carousel/auto
:::



#### 是否循环

设置`ra-loop`为`false`不循环，这种情况下最后项滚动到第一项时会出现其它项的过渡动画

::: demo
carousel/circle
:::

#### Carousel Api

| 参数             | 说明                 | 类型    | 可选值                | 默认值     |
| :--------------- | :------------------- | ------- | :-------------------- | ---------- |
| height        | 走马灯高度           | string  | ——                    | ——         |
| initial-index | 走马灯起始项         | number  | ——                    | ——         |
| autoplay      | 是否自动轮播         | boolean | ——                    | false      |
| interval      | 轮播的间隔           | number  | ——                    | 1s         |
| loop          | 是否循环             | boolean | ——                    | false      |
| direction     | 滚动方向(水平或垂直) | string  | horizontal \|vertical | horizontal |



#### Carousel Events

| 参数      | 说明       | 回调参数            |
| :-------- | :--------- | ------------------- |
| change | 切换时触发 | activeIndex(当前页) |



#### Carousel methods

| 方法名          | 说明             | 参数                        |
| --------------- | ---------------- | --------------------------- |
| raSetActiveItem | 手动切换走马灯项 | 需要切换的项的索引，从0开始 |
| prev            | 切换上一项       | ——                          |
| next            | 切换上一项       | ——                          |

