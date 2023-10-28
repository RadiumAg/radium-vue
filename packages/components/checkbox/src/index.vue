<template>
  <div class="ra-checkbox">
    <input
      :value="state"
      class="ra-checkbox__input"
      type="checkbox"
      @click="handleCheckboxClick"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UPDATE_MODEL_EVENT } from '@radium-vue/utils/common';

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

    const handleCheckboxClick = () => {
      state.value = !state.value;
      emit(UPDATE_MODEL_EVENT, state.value);
    };

    return {
      state,
      handleCheckboxClick,
    };
  },
});
</script>
<style></style>
