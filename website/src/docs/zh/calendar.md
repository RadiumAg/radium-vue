# Calendar 日历

#### 基础使用

::: demo

```html
<template>
   <ra-calendar v-model="date"></ra-calendar>
</template>

<script>
 import { defineComponent, ref ,watch} from 'vue';
 export default defineComponent({
     setup(){
         const date = ref(new Date());
         watch(date,()=>{
             console.log(date.value)
         });
         return {
             date
         };
     }
 });
</script>
```

:::