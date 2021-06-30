module.exports = function(source = '') {
  return `
         <template>${source}</template>
         <script lang="ts">
              import demo from 'Pages/component/demo.vue';
              import { defineComponent } from 'vue';
              export default defineComponent({
                   components: {
                     demo
                   }
              });
          </script>
          `;
};
