::: demo

```html
<template>
<ra-tooltip ra-content="left">
  <ra-button>左边</ra-calendar>
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
