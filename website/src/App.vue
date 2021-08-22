<template>
  <w-header />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import wHeader from 'Pages/fragement/header.vue';
export default defineComponent({
  name: 'RaRoot',
  components: {
    wHeader,
  },
});
</script>
