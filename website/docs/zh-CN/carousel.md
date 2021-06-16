# 走马灯

轮播组件，但是当前这个还较为简单

:::demo  使用ra-carousel 和ra-carousel-item 形成一个走马灯

```html
<template>  
  <div class="block">
    <span class="demonstration">默认设置</span>
    <ra-carousel 
        raHeight="150px" 
        :raInterval="1000"     
        :raAutoplay="true">
        <ra-carousel-item v-for="item in 4" :key="item" style="background:grey;">
               <h3 class="small">{{ item }}</h3>
      </ra-carousel-item>
    </ra-carousel>
  </div>
</template>
```

:::