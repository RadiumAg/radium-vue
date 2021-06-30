<template>
  <div class="demo">
    <div>
      <slot name="doc"></slot>
    </div>
    <div class="demo_source">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Demo',
});
</script>

<style lang="scss" scoped>
.demo {
  margin-top: 10px;
  width: 100%;
  height: max-content;
  min-width: 500px;
  border: 1px solid #ebebeb;
  background: #fff;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
      0 2px 4px 0 rgb(232 237 250 / 50%);
  }
}
</style>
