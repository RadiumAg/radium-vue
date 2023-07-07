<template>
  <ra-carousel height="150px" autoplay>
    <ra-carousel-item v-for="(item, index) in 6" :key="index">
      <div class="ra-carousel-item">{{ index }}</div>
    </ra-carousel-item>
  </ra-carousel>
</template>

<script setup lang="ts"></script>
