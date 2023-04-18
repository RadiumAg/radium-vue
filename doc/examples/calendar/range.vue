<template>
  <ra-calendar
    v-model="date"
    :ra-range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]"
  >
  </ra-calendar>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const date = ref(new Date());
    return {
      date,
    };
  },
});
</script>
