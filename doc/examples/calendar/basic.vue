<template>
  <ra-calendar v-model="date"></ra-calendar>
</template>

<script lang="ts">
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
