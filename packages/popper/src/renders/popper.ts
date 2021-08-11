import { computed, Transition, vShow, withCtx, withDirectives } from 'vue';
import { VNode } from 'vue';
import { h, Slots } from 'vue';
import { TRenderPopperOptions } from './type';
import PopupManager from '@radium-vue/utils/popup-manager';

export default (
  popperOptions: TRenderPopperOptions,
  slots: Slots,
  arrow: VNode,
) => {
  const classList = computed(() => {
    const ret = ['ra-popper'];
    return ret;
  });

  const styleList = computed(() => {
    const ret: Partial<CSSStyleDeclaration>[] = [
      { zIndex: PopupManager.getZIndex().toString() },
    ];
    return ret;
  });
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
      default: withCtx(() =>
        withDirectives(
          h(
            'div',
            {
              style: styleList.value,
              class: classList.value,
              ref: (ref: HTMLElement) => {
                popperOptions.popperElement.value = ref;
              },
            },
            [...slots.content(), arrow],
          ),
          [[vShow, popperOptions.visable.value]],
        ),
      ),
    },
  );
};
