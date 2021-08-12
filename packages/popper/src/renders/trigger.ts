import { getFirstValidNode } from '@radium-vue/utils/vnode';
import throwError from '@radium-vue/utils/error';
import { cloneVNode, VNode } from 'vue';

interface IRenderTriggerProps extends Record<string, unknown> {
  ref: (ref: { $el: HTMLElement }) => void;
}

export const renderTrigger = (
  trigger: VNode[],
  renderProps: IRenderTriggerProps,
) => {
  const firstElement = getFirstValidNode(trigger, 1);
  if (!firstElement)
    throwError('renderTrigger', 'trigger expects single rooted node');
  return cloneVNode(firstElement, renderProps, true);
};
