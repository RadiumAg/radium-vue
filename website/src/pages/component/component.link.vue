<template>
  <div class="component-link">
    <a
      v-for="(link_item, index) in links"
      :key="index"
      :title="link_item.link"
      href="javascript:void 0"
      >{{ link_item.text }}</a
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRootStore } from '../../core/vux-module';
export default defineComponent({
  name: 'ComponentLink',
  setup() {
    const store = useRootStore();
    let links = ref([]);
    watch(store.state, () => {
      links.value = [];
      if (store.state.componentLink.sourceSlotEl) {
        const linkTags = store.state.componentLink.sourceSlotEl.getElementsByClassName(
          'header-anchor',
        );
        Array.from(linkTags).forEach(el => {
          const linkHTag = document.getElementById(
            el.getAttribute('href').replace('#', ''),
          );
          links.value.push({
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
  position: absolute;
  right: 0;
  top: 60px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-left: 1px solid #ebebeb;
  height: max-content;
  a {
    text-align: left;
    max-width: 250px;
    min-width: 200px;
    color: #606266;
    font-size: 12px;
    padding-left: 10px;
    margin-top: 10px;
  }
}
</style>
