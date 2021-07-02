<template>
  <div class="component">
    <component-nav />
    <div class="component_center">
      <ra-scrollbar
        ra-height="100%"
        :ra-wrap-style="[{ padding: '0px 280px 0px 280px' }]"
      >
        <router-view />
      </ra-scrollbar>
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
  height: 100%;
  width: 100%;
  & > .component_center {
    padding-top: 50px;
    height: 100%;
    overflow: hidden;
    min-width: 200px;
  }
}
</style>
