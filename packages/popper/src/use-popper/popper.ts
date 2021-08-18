import { Instance, createPopper } from '@popperjs/core';
import { delay } from '@radium-vue/utils/common';
import { Events } from 'vue';
import { computed, ref, watch } from 'vue';
import { isManualMode } from '.';
import { TEmit, TPopperOptions } from './type';
const triggerActiveEvents: Array<
  {
    [key in keyof Partial<Events>]: () => void;
  }
> = [
  { onClick: undefined },
  { onMousedown: undefined },
  { onFocus: undefined },
];

const triggerLeaveEvents: Array<
  {
    [key in keyof Partial<Events>]: () => void;
  }
> = [
  { onClick: undefined },
  { onMouseleave: undefined },
  { onBlur: undefined },
];

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
            offset: [0, 10],
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

  triggerActiveEvents.forEach(event => {
    event[Object.keys[0]] = _show;
  });

  triggerLeaveEvents.forEach(event => {
    event[Object.keys[0]] = _hide;
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
