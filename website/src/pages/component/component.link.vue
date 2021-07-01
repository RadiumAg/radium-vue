<template>
  <div class="component-link">
    <a
      v-for="(link_item, index) in links"
      :key="index"
      :href="link_item.link"
    >{{ link_item.text }}</a>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, watch } from 'vue';
import { DEMO_COMPONENT_TOKEN, IDemoComponentProvide } from '../../core/token';
export default defineComponent({
  name: 'ComponentLink',
  data() {
    return {
      links: [],
    };
  },
  mounted() {},
});
</script>

<style lang="scss" scoped>
.component-link {
  position: fixed;
  right: 0;
  border-left: 1px solid #ebebeb;
}
</style>
