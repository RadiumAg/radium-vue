# 栅格布局

​		将一行分为24列，进行基础的布局，超出会换行

### 基础布局



:::demo 基础布局

```html
<ra-row ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="24" class="ra-col">
        <div class="grid-content bg-purple-dark">             </div>  
   </ra-col>
</ra-row>

<ra-row ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="12" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="12" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
</ra-row>
        
<ra-row ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="8" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="8" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="8" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
</ra-row>

<ra-row ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
    </ra-col>
</ra-row>
        
<ra-row ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="4" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="4" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="4" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="4" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
    </ra-col>
    <ra-col :ra-span="4" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="4" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
    </ra-col>
</ra-row>
```

:::

### 分栏间隔

​	分栏之间的间隔主要是通过padding实现的

#####     数组形式

​	ra-gutter为数组形式时，第一个元素为左右间隔，第二个为上下间隔

:::demo 分栏间隔

```html
<ra-row :ra-gutter="[10,10]" ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
  <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
  <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
  <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
```

:::

#####     数值形式

​	ra-gutter为数值形式时，默认设置一栏当中每一栏的左右间隔

:::demo

```html
<ra-row :ra-gutter="10" ra-justify="flex-start" class="ra-row">
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="6" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
```

:::

### 内容排版

​	水平排版:

:::demo

```html
<ra-row ra-justify="center" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="start" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="end" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="space-around" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="space-between" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
```

:::

​	垂直排版:

:::demo

```html
<ra-row ra-align="center" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="start" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="end" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="space-around" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
        
<ra-row ra-justify="space-between" class="ra-row row-bg">
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"><div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-dark"></div>
    </ra-col>
    <ra-col :ra-span="5" class="ra-col">
       <div class="grid-content bg-purple-light"></div>
  </ra-col>
</ra-row>
```

:::