<template>
  <div class="component">
    <component-nav />
    <div class="component_right">
      <router-view />
    </div>
    <component-link />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentNav from './component/component.nav.vue';
import ComponentLink from './component/component.link.vue';
export default defineComponent({
  name: 'Component',
  components: {
    ComponentNav,
    ComponentLink,
  },
});
</script>

<style lang="scss" scoped>
.component {
  $component_padding: 15px 290px 100px 90px;
  padding-top: 50px;
  height: 100%;
  width: 100%;
  display: inline-flex;
  & > .component_right {
    padding: $component_padding;
    flex-grow: 1;
  }
}
</style>
