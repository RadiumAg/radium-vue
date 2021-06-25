module.exports = function(source = '') {
  return `
         <template>${source}</template>
         <script lang="ts">
            import { defineComponent } from 'vue';
            export default defineComponent({
            });
          </script>
          <style lang="scss" scoped></style>
          `;
};
