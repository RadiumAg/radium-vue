# Calendar 日历

#### 基础使用

::: demo

```html
<template>
   <ra-calendar></ra-calendar>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';
 export default defineComponent({
     setup(){
         const date = ref(new Date());
     }
 });
</script>
```

:::