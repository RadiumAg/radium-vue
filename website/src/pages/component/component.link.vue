<template>
  <div class="component-link">
    <a
      v-for="(link_item, index) in links"
      :key="index"
      :href="link_item.link"
      >{{ link_item.text }}</a
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
import { useRootStore } from '../../core/vux-module';
export default defineComponent({
  name: 'ComponentLink',
  setup() {
    const store = useRootStore();
    const links = reactive([]);

    watch(store.state, () => {
      console.log(store.state);
      if (store.state.componentLink.sourceSlotEl) {
        const linkTags = store.state.componentLink.sourceSlotEl.getElementsByClassName(
          'header-anchor',
        );
        Array.from(linkTags).forEach(el => {
          links.push({ text: el.innerHTML, link: el.getAttribute('href') });
        });
      }
    });

    return {
      links,
    };
  },
});
</script>

<style lang="scss" scoped>
.component-link {
  position: fixed;
  right: 0;
  border-left: 1px solid #ebebeb;
}
</style>
