import { computed, h } from 'vue';

export default (showArrow: boolean, arrowOffset: number) => {
  if (!showArrow) return null;
  const arrowStyle = computed(() => {
    const ret = [];
    return ret;
  });

  const arrowClass = computed(() => {
    const ret = ['ra-popper__arrow'];
    return ret;
  });
  return h('div', {
    ['data-popper-arrow']: true,
    class: arrowClass.value,
    style: arrowStyle.value,
  });
};
