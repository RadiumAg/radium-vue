import { computed, h } from 'vue';
import { ETheme } from '../use-popper/type';

export default (showArrow: boolean, arrowOffset: number, effect: ETheme) => {
  if (!showArrow) return null;
  const arrowStyle = computed(() => {
    const ret = [];
    return ret;
  });

  const arrowClass = computed(() => {
    const ret = ['ra-popper__arrow'];
    ret.push(`is-${effect}`);
    return ret;
  });
  return h('div', {
    ['data-popper-arrow']: true,
    class: arrowClass.value,
    style: arrowStyle.value,
  });
};
