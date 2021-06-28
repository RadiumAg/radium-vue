<template>
  <div class="component">
    <component-nav />
    <div class="component_right">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentNav from './component/component.nav.vue';
export default defineComponent({
  name: 'Component',
  components: {
    ComponentNav,
  },
});
</script>

<style lang="scss" scoped>
.component {
  $component_right: 15px 90px;
  padding-top: 50px;
  height: 100%;
  display: inline-flex;
  & > .component_right {
    padding: $component_right;
    flex-grow: 1;
  }
}
</style>
