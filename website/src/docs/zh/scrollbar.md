# Scrollbar滚动条

#### 竖向滚动

  最基本得滚动，设置"ra-height"滚动条高度后就可以使用

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

​	默认滚动容器得宽度为'100%',超出宽度后自动出现滚动条

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

