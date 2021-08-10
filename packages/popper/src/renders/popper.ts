import { Transition, vShow, withCtx, withDirectives } from 'vue';
import { h, Slots } from 'vue';
import { TRenderPopperOptions } from './type';

export default (popperOptions: TRenderPopperOptions, slots: Slots) => {
  return h(
    Transition,
    {
      name: popperOptions.name,
      onAfterEnter: popperOptions.onAfterEnter,
      onAfterLeave: popperOptions.onAfterLeave,
      onBeforeEnter: popperOptions.onBeforeEnter,
      onBeforeLeave: popperOptions.onBeforeLeave,
    },
    {
      content: withCtx(() =>
        withDirectives(
          h(
            'div',
            {
              ref: (ref: HTMLElement) => {
                popperOptions.popperElement.value = ref;
              },
              onMouseenter: popperOptions.onPopperMouseenter,
              onMouseleave: popperOptions.onPopperMouseleave,
            },
            slots.content(),
          ),
          [[vShow, popperOptions.visable.value]],
        ),
      ),
    },
  );
};
