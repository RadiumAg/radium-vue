# Carousel 轮播

#### 基本使用

配合ra-carousel和ra-carousel-item就能完成一个基本的轮播

::: demo

```html
<ra-carousel ra-height="150px">
   <ra-carousel-item v-for="(item,index) in 4" >
      <div class="ra-carousel-item" >{{index}}</div>
   </ra-carousel-item>
</ra-carousel>
```

:::