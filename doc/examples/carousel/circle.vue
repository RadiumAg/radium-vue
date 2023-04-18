<template>
  <ra-carousel ra-height="150px" ra-autoplay :ra-loop="false">
    <ra-carousel-item v-for="(item, index) in 6">
      <div class="ra-carousel-item">{{ index }}</div>
    </ra-carousel-item>
  </ra-carousel>
</template>

<script setup lang="ts"></script>
