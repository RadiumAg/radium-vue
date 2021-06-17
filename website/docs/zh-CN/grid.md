# 栅格布局

栅格布局，参考了ng-zorro

:::demo 栅格布局

```html
<template>  
     <ra-row ra-justify="flex-start" class="el-row">
       <ra-col :ra-span="24" class="el-col">
           <div class="grid-content bg-purple"></div>  
       </ra-col>
    </ra-row>
    <ra-row ra-justify="flex-start" class="el-row">
       <ra-col :ra-span="5" class="el-col bg-purple-dark bg-purple"></ra-col>
       <ra-col :ra-span="5" class="el-col"></ra-col>
       <ra-col :ra-span="5" class="el-col"></ra-col>
    </ra-row>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```

:::