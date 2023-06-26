<template>
  <ra-slider v-model="sliderValue" :max="120"></ra-slider>
</template>

<script lang="ts" setup>
const sliderValue = ref(0);
</script>
