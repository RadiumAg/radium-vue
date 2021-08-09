import { Instance } from '@popperjs/core';
import { createPopper } from '@popperjs/core/lib/createPopper';
import { delay } from 'lodash';
import { computed, ref } from 'vue';
import { isManualMode } from '.';
import { TEmit, TPropperOptions } from './type';

export default (
  options: TPropperOptions,
  {
    emit,
  }: {
    emit: TEmit;
  },
) => {
  const popperInstance = ref<Instance>();
  const reference = ref<HTMLElement>();
  const popperElement = ref<HTMLElement>();
  const state = ref(false);

  const visable = computed<boolean>({
    get() {
      return state.value;
    },
    set(value) {
      if (isManualMode(options.manualMode, options.trigger)) return;
      state.value = value;
      emit('update:visible', state.value);
    },
  });

  const createPopperInstance = () => {
    popperInstance.value = createPopper(
      reference.value,
      popperElement.value,
      options,
    );
  };

  const onPopperMouseenter = () => {};

  const onPopperMouseleave = () => {};

  return {
    popperInstance,
    reference,
    popperElement,
    visable,
    onAfterEnter: () => {
      emit('after-enter');
    },
    onAfterLeave: () => {
      emit('after-leave');
    },
    onBeforeEnter: () => {
      emit('before-enter');
    },
    onBeforeLeave: () => {
      emit('before-leave');
    },
    onPopperMouseenter,
    onPopperMouseleave,
    createPopperInstance,
  };
};
