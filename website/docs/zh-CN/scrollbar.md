## Scrollbar 滚动条

用于替换浏览器原生滚动条。

### 基础用法

:::demo 通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

```html
<el-scrollbar height="400px">
  <p class="item" v-for="item in 20">{{ item }}</p>
</el-scrollbar>
```

:::

### 横向滚动

:::demo 当元素宽度大于滚动条宽度时，会显示横向滚动条。

```html
<el-scrollbar>
  <div class="flex-content">
    <p class="item" v-for="item in 50">{{ item }}</p>
  </div>
</el-scrollbar>
```

:::

### 最大高度

:::demo 当元素高度超过最大高度，才会显示滚动条。

```html
<template>
  <el-button @click="add">添加元素</el-button>
  <el-button @click="delete">删除元素</el-button>
  <el-scrollbar max-height="400px">
    <p class="item" v-for="item in count">{{ item }}</p>
  </el-scrollbar>
</template>

<script>
  export default {
    data() {
      return {
        count: 3
      }
    },
    methods: {
      add() {
        this.count++
      },
      delete() {
        if (this.count > 0) {
          this.count--
        }
      }
    }
  }
</script>
```

:::

### Scrollbar Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| height          | 滚动条高度         | string / number  |          —             |    —     |
| max-height          | 滚动条最大高度         | string / number  |          —             |    —     |
| native          | 是否使用原生滚动条样式         | boolean  |          —             |    false     |
| wrap-style    | 包裹容器的自定义样式  | string | — |    —  |
| wrap-class  | 包裹容器的自定义类名    | string  |    —  |  — |
| view-style  | 视图的自定义样式    | string  |    —  |  — |
| view-class  | 视图的自定义类名    | string  |    —  |  — |
| noresize  | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能    | boolean  |    —  |  false |
| tag  | 视图的元素标签    | string  |    —  |  div |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| scroll | 滚动时触发的事件 | 滚动距离 { scrollLeft, scrollTop }|
