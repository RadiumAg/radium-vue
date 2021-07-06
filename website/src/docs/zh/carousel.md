# Carousel 轮播

#### 基本使用

::: demo

```html
<ra-carousel ra-height="150px">
   <ra-carousel-item v-for="(item,index) in 4" >
      <div class="ra-carousel-item" >{{index}}</div>
   </ra-carousel-item>
</ra-carousel>
```

:::