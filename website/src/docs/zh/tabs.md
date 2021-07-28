# Tabs 加载提示

#### 基础使用

::: demo

```html
<template>
	<ra-tabs v-model="modelValue">
          <ra-tab-panel raLabel="电脑" raName="computed">电脑</ra-tab-panel>
          <ra-tab-panel raLabel="手机" raName="phone">手机</ra-tab-panel>
          <ra-tab-panel raLabel="冰箱" raName="Refrigerator">冰箱</ra-tab-panel>
	</ra-tabs>
</template>

<script>
  import { defineComponent,watch } from 'vue';
  
  export default defineComponent({
      setup(){
          const modelValue = ref('phone');
          watch(modelValue,()=>{
              console.log(modelValue.value);
          })
          return {
              modelValue
          }
      }
  })
</script>
```

:::