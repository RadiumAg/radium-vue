<template>
  <div class="component">
    <component-nav />
    <div class="component_center">
      <ra-scrollbar
        ref="componentCenterRef"
        ra-height="max-content"
        ra-max-height="100%"
        :ra-wrap-style="[{ padding: '0px 280px 200px 280px' }]"
        @ra-scroll="scroll($event)"
      >
        <router-view />
      </ra-scrollbar>
    </div>
    <component-link />
  </div>
</template>

<script lang="ts">
import { ComponentInternalInstance, defineComponent, ref, watch } from 'vue';
import ComponentNav from './component/component.nav.vue';
import ComponentLink from './component/component.link.vue';
import { useRootStore } from 'Core/vuex-module';
import {
  SET_EL_COMPONENT_SCROLLBAR,
  SET_EL_COMPONENT_SCROLLBAR_TOP,
} from 'Core/vuex-module/state/component';
import { throttle } from 'lodash';
export default defineComponent({
  name: 'Component',
  components: {
    ComponentNav,
    ComponentLink,
  },
  setup() {
    const rootStore = useRootStore();
    const componentCenterRef = ref<ComponentInternalInstance>(null);

    watch(componentCenterRef, () => {
      componentCenterRef.value &&
        rootStore.commit(SET_EL_COMPONENT_SCROLLBAR, {
          el: componentCenterRef.value['_'],
        });
    });

    //func
    const scroll = throttle(([scrollLeft, scrollTop]: [number, number]) => {
      rootStore.commit(SET_EL_COMPONENT_SCROLLBAR_TOP, { scrollTop });
    });

    return {
      componentCenterRef,
      scroll,
    };
  },
});
</script>

<style lang="scss" scoped>
.component {
  height: 100%;
  width: 100%;
  min-width: 1000px;
  position: relative;
  & > .component_center {
    padding-top: 50px;
    height: 100%;
    overflow: hidden;
  }
}
</style>
