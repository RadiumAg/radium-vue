<template>
  <div class="ra-checkbox">
    <input :value="state" type="checkbox" @click="checkboxClicked" />
    <slot />
  </div>
</template>
<script lang="ts">
import { UPDATE_MODEL_EVENT } from '@radium-vue/utils/common';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'RaCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: { modelValue: boolean }, { emit }) {
    const state = ref(props.modelValue);
    const checkboxClicked = () => {
      state.value = !state.value;
      emit(UPDATE_MODEL_EVENT, state.value);
    };

    return {
      props,
      state,
      checkboxClicked,
    };
  },
});
</script>
<style></style>
