# 滚动条

​	支持横向滚动和竖向滚动

### 竖向滚动

:::demo 定义raMaxHeight或者raHeight之后，内部元素超过容器就会显示

```html
<ra-scrollbar :ra-max-height="'200px'" >
     <div v-for="(item,index) in 20" :key="index" class = "item-blue-vertical">
         {{index}}
    </div>
</ra-scrollbar>
```

:::



### 横向滚动

:::demo默认容器的宽度为100%
```html
<ra-scrollbar :ra-max-height="'200px'" >
    <div class="item-blue-horizontal-container">
     <div v-for="(item,index) in 20" :key="index" class = "item-blue-horizontal">
         {{index}}
    </div>
    <div>
</ra-scrollbar>
```

:::



### Scrollbar Attributes

|    参数     |         说明         |      类型      | 可选值 | 默认值 |
| :---------: | :------------------: | :------------: | :----: | :----: |
|  raHeight   |      滚动条高度      | string\|number |   无   |   无   |
| raMaxHeight |    滚动条最大高度    | string\|number |   无   |   无   |
|  raNative   | 是否显示与原始滚动条 |    boolean     |   无   | false  |

