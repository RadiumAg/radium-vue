# Calendar 日历

日历控件，可选择日期



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
      <template #default="data">
          {{data.date}}{{data.isSelected? '🙉':''}}
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
   </ra-calendar>
</template>

<script>
 import { defineComponent, ref} from 'vue';
 export default defineComponent({
     setup(){
         const date = ref(new Date());
         return {
             date
         };
     }
 });
</script>
```

:::


#### Calendar  Api

| 参数               | 说明         | 类型    | 可选值 | 默认值 |
| :----------------- | :----------- | ------- | :----- | ------ |
| modelValue/v-model | 当前选中日期 | Date    | ——     | ——     |
| ra-range           | 范围         | Date[ ] | ——     | ——     |



#### Carousel default slots

| 参数 | 说明                                       | 类型   | 可选值 | 默认值 |
| :--- | :----------------------------------------- | ------ | :----- | ------ |
| data | isSelected:是否选中, date:日期，month:日期 | Object | ——     | ——     |

