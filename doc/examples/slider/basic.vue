<template>
  <ra-slider v-model="sliderValue" :ra-max="50.5"></ra-slider>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const sliderValue = ref(0);

    return {
      sliderValue,
    };
  },
});
</script>
