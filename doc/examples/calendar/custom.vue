<template>
  <ra-calendar v-model="date">
    <template #default="data">
      {{ data.date }}{{ data.isSelected ? '🙉' : '' }}
    </template>
  </ra-calendar>
</template>

<script lang="ts">
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
