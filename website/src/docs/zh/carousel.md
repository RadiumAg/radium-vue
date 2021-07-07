# Carousel 轮播

#### 基本使用

配合`ra-carousel`和`ra-carousel-item`就能完成一个基本的轮播

::: demo

```html
<ra-carousel ra-height="150px" >
   <ra-carousel-item v-for="(item,index) in 6" >
      <div class="ra-carousel-item" >{{index}}</div>
   </ra-carousel-item>
</ra-carousel>
```

:::

#### 垂直方向

设置`ra-direction`为`vertical`变成垂直方向滚动

::: demo

```html
<ra-carousel ra-height="150px" ra-direction="vertical">
   <ra-carousel-item v-for="(item,index) in 6" >
      <div class="ra-carousel-item" >{{index}}</div>
   </ra-carousel-item>
</ra-carousel>
```

:::