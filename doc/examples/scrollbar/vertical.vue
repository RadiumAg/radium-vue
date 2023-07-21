<template>
  <ra-scrollbar height="230px">
    <div v-for="(item, index) in 20" :key="index" class="ra-scrollbar-item">
      {{ item }}
    </div>
  </ra-scrollbar>
</template>

<script setup lang="ts"></script>
