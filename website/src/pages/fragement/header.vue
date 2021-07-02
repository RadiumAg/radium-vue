<template>
  <div class="header">
    <div>RADIUM</div>
    <div class="header_right">
      <router-link class="header_right_link" :to="router">组件</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  computed: {
    router() {
      return `/component/`;
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 50px;
  width: 100%;
  padding: 10px 50px;
  box-shadow: 0 8px 24px -2px rgb(0 0 0 / 5%);
  position: fixed;
  z-index: 1001;
}

.header_right {
  .header_right_link {
    font-size: 14px;
    cursor: pointer;
    color: #4d5164;
    text-decoration: none;
  }
}
</style>
