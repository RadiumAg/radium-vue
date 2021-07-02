module.exports = function(source = '') {
  return `
         <template><div ref="componentRightRef">${source}</div></template>
         <script lang="ts">
              import demo from 'Pages/component/demo.vue';
              import { useRootStore } from 'Core';
              import { SET_EL_MUTATION } from 'Core/state/component-link';
              import { defineComponent,watch,ref } from 'vue';
              export default defineComponent({
                   components: {
                     demo
                   },
                   setup() {
                    const componentRightRef = ref<HTMLElement>(null);
                    const rootStore = useRootStore();
                    watch(componentRightRef, () => {
                        rootStore.commit(SET_EL_MUTATION, { el: componentRightRef });
                        console.log(rootStore.state.componentLink);
                    });
                
                    return {
                      componentRightRef,
                    };
                  },
              });
          </script>
          `;
};
