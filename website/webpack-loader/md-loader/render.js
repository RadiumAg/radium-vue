module.exports = function(source = '', docDemoComponent = {}) {
  let componentString = '';
  for (const key in docDemoComponent) {
    const value = docDemoComponent[key];
    componentString = componentString + `${key}:${value},`;
  }

  return `
         <template><div ref="docRef" class="demo_block">${source}</div></template>
         <script lang="ts">
              import { useRootStore } from 'Core/vuex-module';
              import { SET_EL_MUTATION } from 'Core/vuex-module/state/component-link';
              import { defineComponent,watch,ref,onMounted } from 'vue';
              import hljs from 'highlight.js';
              export default defineComponent({
                   components: {
                     ${componentString}
                   },
                   setup() {
                    const docRef = ref<HTMLElement>(null);
                    const rootStore = useRootStore();
                    watch(docRef, () => {
                        rootStore.commit(SET_EL_MUTATION, { el: docRef });
                    });
                    onMounted(() => {
                      hljs.highlightAll();
                    });
                    return {
                      docRef,
                    };
                  },
              });
          </script>
          `;
};
