<template>
  <ra-row :gutter="[10]">
    <ra-col>
      <ra-tooltip content="light主题" placement="top" effect="light">
        <ra-button>light</ra-button>
      </ra-tooltip>
    </ra-col>

    <ra-col>
      <ra-tooltip content="dark主题" placement="bottom">
        <ra-button>dark</ra-button>
      </ra-tooltip>
    </ra-col>
  </ra-row>
</template>

<script setup lang="ts"></script>
