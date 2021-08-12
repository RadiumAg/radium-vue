import { Instance, createPopper } from '@popperjs/core';
import { delay } from '@radium-vue/utils/common';
import { computed, ref } from 'vue';
import { isManualMode } from '.';
import { TEmit, TPopperOptions } from './type';

export default function(
  options: TPopperOptions,
  {
    emit,
  }: {
    emit: TEmit;
  },
) {
  const state = ref(false);
  const popperInstance = ref<Instance>();
  const reference = ref<HTMLElement>();
  const popperElement = ref<HTMLElement>();

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
    popperInstance.value = createPopper(reference.value, popperElement.value, {
      placement: options.placement,
      strategy: options.strategy,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
  };

  const onPopperMouseenter = () => {};
  const onPopperMouseleave = () => {};
  const onTriggerMouseEnter = () => {
    if (options.showAfter) {
      delay(() => {
        visable.value = true;
        popperInstance.value.update();
      }, options.showAfter);
      return;
    }
    visable.value = true;
    popperInstance.value.update();
  };

  const onTriggerMouseLeave = () => {
    if (options.hideAfter) {
      delay(() => {
        visable.value = false;
        popperInstance.value.update();
      }, options.showAfter);
      return;
    }
    visable.value = false;
    popperInstance.value.update();
  };

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
    onTriggerMouseEnter,
    onTriggerMouseLeave,
    createPopperInstance,
  };
}
