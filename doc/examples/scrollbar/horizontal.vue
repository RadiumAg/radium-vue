<template>
  <ra-scrollbar>
    <div class="ra-scrollbar-item-horizontal-container">
      <div
        v-for="(item, index) in 20"
        :key="index"
        class="ra-scrollbar-item-horizontal"
      >
        {{ item }}
      </div>
    </div>
  </ra-scrollbar>
</template>

<script setup lang="ts"></script>
