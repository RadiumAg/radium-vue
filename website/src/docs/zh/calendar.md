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



#### 自定义格式

::: demo

```html
<template>
   <ra-calendar v-model="date">
      <template #default="{date, isSelected}">
          {{date}}{{isSelected? '🙉':''}}
       </template>
    </ra-calendar>
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



#### 限制范围

::: demo

```html
<template>
   <ra-calendar v-model="date" :ra-range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]">
      <template #default="{date, isSelected}">
          {{date}}{{isSelected? '🙉':''}}
       </template>
    </ra-calendar>
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