::: demo

```html
<template>
    <ra-tooltip ra-content="top-start" ra-placement='top-start'>
      <ra-button>上左</ra-calendar>
    </ra-tooltip>
    
    <ra-tooltip ra-content="top" ra-placement='top'>
      <ra-button>上边</ra-calendar>
    </ra-tooltip>
    
    <ra-tooltip ra-content="top-end" ra-placement='top-end'>
      <ra-button>上右</ra-calendar>
    </ra-tooltip>
</template>

<script>
  import { defineComponent, ref, watch } from 'vue';
  export default defineComponent({
    setup() {
      const date = ref(new Date());
      watch(date, () => {
        console.log(date.value);
      });
      return {
        date,
      };
    },
  });
</script>
```

:::