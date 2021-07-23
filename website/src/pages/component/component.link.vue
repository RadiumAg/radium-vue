<template>
  <div class="component-link">
    <a
      v-for="(link_item, index) in links"
      :key="index"
      :title="link_item.link"
      href="javascript:void 0"
      :class="{ 'is-active': activeFlag[index] }"
      @click="scrollTo(index)"
    >{{ link_item.text }}</a>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRootStore } from '../../core/vux-module';
export default defineComponent({
  name: 'ComponentLink',
  setup() {
    const store = useRootStore();
    const activeFlag = ref<boolean[]>([]);
    let links = ref<{ text: string; link: string }[]>([]);
    let linkTagList = ref<HTMLElement[]>([]);

    // methods
    function scrollTo(index: number) {
      scrollActive(index);
      (store.state.component.scrollbarEl.refs[
        'scrollBarRef'
      ] as HTMLElement).scrollTo({
        top: linkTagList.value[index].offsetTop,
        behavior: 'smooth',
      });
    }

    function scrollActive(index: number) {
      activeFlag.value = activeFlag.value.map(() => false);
      activeFlag.value[index] = true;
    }

    // watch
    watch(store.state.component, () => {
      linkTagList.value.forEach((el, index) => {
        if (
          Math.floor(store.state.component.scrollTop) >=
          Math.floor(el.offsetTop)-20
        ) {
          scrollActive(index);
        } else if (
          Math.floor(store.state.component.scrollTop) <= el.offsetTop &&
          index === 0
        ) {
          scrollActive(index);
        }
      });
    });

    watch(store.state.componentLink, () => {
      links.value = [];
      if (store.state.componentLink.sourceSlotEl) {
        const linkTags = store.state.componentLink.sourceSlotEl.getElementsByClassName(
          'header-anchor',
        );
        linkTagList.value = Array.from(linkTags) as HTMLElement[];
        setTheActiveFlag();
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

    // func
    function setTheActiveFlag() {
      activeFlag.value.push(false);
    }

    return {
      links,
      scrollTo,
      scrollActive,
      activeFlag,
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
    &.is-active {
      color: #409eff;
    }
  }
}
</style>
