# grid 布局





#### 基础布局

`ra-row`加`:ra-span`形成一个基础的布局，超过一行后换行。

::: demo

```html
<ra-row :ra-gutter="[0,20]">
   <ra-col :ra-span="24">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
</ra-row>
<ra-row :ra-gutter="[0,20]">
   <ra-col :ra-span="12">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
     <ra-col :ra-span="12">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
</ra-row>
<ra-row :ra-gutter="[0,20]">
   <ra-col :ra-span="8">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
     <ra-col :ra-span="8">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
       <ra-col :ra-span="8">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
</ra-row>
<ra-row :ra-gutter="[0,20]">
   <ra-col :ra-span="6">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
     <ra-col :ra-span="6">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
       <ra-col :ra-span="6">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
      <ra-col :ra-span="6">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
</ra-row>
<ra-row :ra-gutter="[0,20]">
   <ra-col :ra-span="4">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
     <ra-col :ra-span="4">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
    <ra-col :ra-span="4">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
    <ra-col :ra-span="4">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
      <ra-col :ra-span="4">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
       <ra-col :ra-span="4">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
</ra-row>
```

:::

#### 分栏间隔

使用`ra-gutter`来设置分栏间隔。

::: demo

```html

<ra-row :ra-gutter="[20,20]" ra-justify="center">
    <ra-col :ra-span="6">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
     <ra-col :ra-span="6">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
    <ra-col :ra-span="6">
      <div class="ra-grid-item-color-1"></div>  
    </ra-col>
     <ra-col :ra-span="6">
      <div class="ra-grid-item-color-2"></div>  
    </ra-col>
</ra-row>

```

:::