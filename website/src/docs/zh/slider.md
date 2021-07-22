# Slider 滑块



#### 基本使用

:::demo 

```html
<template>
	<ra-slider v-model="sliderValue"></ra-slider>
    {{sliderValue}}
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

