<template>
  <div class="header">
    <div>radium ui</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
}
</style>
