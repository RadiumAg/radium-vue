<template>
  <ra-slider
    v-model="sliderValue"
    vertical
    height="300px"
    :max="100"
  ></ra-slider>
</template>

<script lang="ts" setup>
const sliderValue = ref(0);
</script>
