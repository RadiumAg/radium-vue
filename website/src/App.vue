<template>
  <header></header>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import header from 'Pages/fragement/header.vue';
export default defineComponent({
  name: 'RaRoot',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    header,
  },
});
</script>

<style lang="scss" scoped></style>
