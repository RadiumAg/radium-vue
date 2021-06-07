

```
  <div class="block">
    <span class="demonstration">测试</span>
    <ra-carousel raHeight="150px">
        <ra-carousel-item v-for="item in 4" :key="item" style="background:blue;">
               <h3 class="small">{{ item }}</h3>
      </ra-carousel-item>
    </ra-carousel>
  </div>
```

