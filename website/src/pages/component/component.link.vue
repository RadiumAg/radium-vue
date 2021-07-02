<template>
  <div class="component-link">
    <a
      v-for="(link_item, index) in links"
      :key="index"
      :title="link_item.link"
      href="javascript:void 0"
    >{{ link_item.text }}</a>
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
      if (store.state.componentLink.sourceSlotEl) {
        const linkTags = store.state.componentLink.sourceSlotEl.getElementsByClassName(
          'header-anchor',
        );
        Array.from(linkTags).forEach(el => {
          const linkHTag = document.getElementById(
            el.getAttribute('href').replace('#', ''),
          );
          links.push({
            text: linkHTag.textContent.replace('¶', ''),
            link: `#${linkHTag.getAttribute('id')}`,
          });
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
  display: flex;
  flex-direction: column;
  padding: 50px;
  flex-shrink: 0;
  border-left: 1px solid #ebebeb;

  a {
    color: #606266;
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
