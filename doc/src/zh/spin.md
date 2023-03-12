# Spin 加载提示



#### 基本使用

:::demo 

```html
<template>
   <div style=" height: 500px" v-spin={isShow:true}>11111111111</div>
</template>

<script>
    import { defineComponent,sliderValue } from 'vue';
	export default defineComponent({
        setup() {
            const sliderValue = ref(0);
            
            return {
                sliderValue
            }
        }
    })
</script>
```

:::

