# Slider 滑块



#### 基本使用

:::demo 

```html
<template>
	<ra-slider v-model="sliderValue"></ra-slider>
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



#### 竖向模式

:::demo 

```html
<template>
	<ra-slider v-model="sliderValue" ra-is-vertical></ra-slider>
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
