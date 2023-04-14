import { Instance, createPopper } from '@popperjs/core';
import { delay } from '@radium-vue/utils/common';
import { computed, ref, watch } from 'vue';
import { TEmit, TPopperOptions } from './type';
import { isManualMode } from '.';
const triggerActiveEvents: {
  [key in 'onClick' | 'onMouseenter' | 'onFocus']: () => void;
} = { onClick: undefined, onMouseenter: undefined, onFocus: undefined };

const triggerLeaveEvents: {
  [key in 'onMouseleave' | 'onBlur']: () => void;
} = { onMouseleave: undefined, onBlur: undefined };

export default function (
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

  watch(options, () => {
    visable.value = options.visible;
  });

  const visable = computed<boolean>({
    get() {
      return state.value;
    },
    set(value) {
      if (isManualMode(options.manualMode, options.trigger)) {
        state.value = options.visible;
      } else {
        state.value = value;
      }
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
            offset: [0, options.offset],
          },
        },
      ],
    });
  };

  const onPopperMouseenter = () => {};
  const onPopperMouseleave = () => {};

  function _hide() {
    if (isManualMode(options.manualMode, options.trigger)) return;
    if (options.hideAfter) {
      delay(() => {
        visable.value = false;
        popperInstance.value.update();
      }, options.showAfter);
      return;
    }
    visable.value = false;
    popperInstance.value.update();
  }

  function _show() {
    if (isManualMode(options.manualMode, options.trigger)) return;
    if (options.showAfter) {
      delay(() => {
        visable.value = true;
        popperInstance.value.update();
      }, options.showAfter);
      return;
    }
    visable.value = true;
    popperInstance.value.update();
  }

  Object.keys(triggerActiveEvents).forEach(key => {
    if (options.trigger === 'click' && key === 'onClick') {
      triggerActiveEvents[key] = _show;
    } else if (options.trigger === 'focus' && key === 'onFocus') {
      triggerActiveEvents[key] = _show;
    } else if (options.trigger === 'hover' && key === 'onMouseenter') {
      triggerActiveEvents[key] = _show;
    }
  });

  Object.keys(triggerLeaveEvents).forEach(key => {
    if (options.trigger === 'focus' && key === 'onBlur') {
      triggerLeaveEvents[key] = _hide;
    } else if (options.trigger === 'hover' && key === 'onMouseleave') {
      triggerLeaveEvents[key] = _hide;
    }
  });

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
    triggerActiveEvents,
    triggerLeaveEvents,
    onPopperMouseenter,
    onPopperMouseleave,
    createPopperInstance,
  };
}
