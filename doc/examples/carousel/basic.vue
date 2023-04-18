<template>
  <ra-carousel ra-height="150px" :ra-initial-index="2">
    <ra-carousel-item v-for="(item, index) in 6" :key="index">
      <div class="ra-carousel-item">{{ index }}</div>
    </ra-carousel-item>
  </ra-carousel>
</template>

<script setup lang="ts"></script>
