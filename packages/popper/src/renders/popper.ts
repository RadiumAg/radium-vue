import { Transition, vShow, withCtx, withDirectives } from 'vue';
import { Fragment } from 'vue';
import { h, Slots } from 'vue';
import { TRenderPopperOptions } from './type';

export default (popperOptions: TRenderPopperOptions, slots: Slots) => {
  return h(
    Transition,
    {
      onBeforeEnter: popperOptions.onBeforeEnter,
      onBeforeLeave: popperOptions.onBeforeLeave,
      onAfterEnter: popperOptions.onAfterEnter,
      onAfterLeave: popperOptions.onAfterLeave,
    },
    {
      content: withCtx(() =>
        withDirectives(h(Fragment, slots.content()), [
          [vShow, popperOptions.visable.value],
        ]),
      ),
    },
  );
};
