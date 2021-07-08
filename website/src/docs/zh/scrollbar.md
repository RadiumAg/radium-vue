# Scrollbar滚动条

#### 竖向滚动

  最基本得滚动，设置`ra-height`滚动条高度后就可以使用

:::demo 

```html
<ra-scrollbar ra-height="230px">
	<div v-for="(item,index) in 20" :key="index" class="ra-scrollbar-item">
   		 {{item}}
	</div>
</ra-scrollbar>	
```

:::

#### 横向滚动

​	默认滚动容器得`宽度`为`100%`,超出宽度后自动出现滚动条

:::demo 

```html
<ra-scrollbar >
    <div class="ra-scrollbar-item-horizontal-container">
        <div v-for="(item,index) in 20" :key="index" class="ra-scrollbar-item-horizontal">
             {{item}}
        </div>
    </div>
</ra-scrollbar>	
```

:::

#### Scrollbar Api

| 参数          | 说明               | 类型      | 可选值 | 默认值 |
| :------------ | :----------------- | --------- | :----- | ------ |
| ra-height     | 滚动条高度         | string    | ——     | ——     |
| ra-max-height | 滚动条最大高度     | string    | ——     | ——     |
| ra-native     | 是否使用原生滚动条 | boolean   | ——     | ——     |
| ra-wrap-style | 滚动容器行内样式   | string[ ] | ——     | ——     |
| ra-wrap-class | 滚动容器自定义类名 | string[ ] | ——     | ——     |

#### Events

| 参数      | 说明               | 回调参数               |
| :-------- | :----------------- | ---------------------- |
| ra-scroll | 滚动时报告滚动位置 | [scrollLeft,ScrollTop] |

