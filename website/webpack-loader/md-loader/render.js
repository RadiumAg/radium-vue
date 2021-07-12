module.exports = function(source = '', docDemoComponent = {}) {
  let componentString = '';
  for (const key in docDemoComponent) {
    const value = docDemoComponent[key];
    componentString = componentString + `${key}:${value},`;
  }

  return `
         <template><div ref="componentRightRef" class="demo_block">${source}</div></template>
         <script lang="ts">
              import { useRootStore } from 'Core/vux-module';
              import { SET_EL_MUTATION } from 'Core/vux-module/state/component-link';
              import { defineComponent,watch,ref,onMounted } from 'vue';
              import hljs from 'highlight.js';
              export default defineComponent({
                   components: {
                     ${componentString}
                   },
                   setup() {
                    const componentRightRef = ref<HTMLElement>(null);
                    const rootStore = useRootStore();
                    watch(componentRightRef, () => {
                        rootStore.commit(SET_EL_MUTATION, { el: componentRightRef });
                    });
                    onMounted(() => {
                      hljs.highlightAll();
                    });
                    return {
                      componentRightRef,
                    };
                  },
              });
          </script>
          `;
};
