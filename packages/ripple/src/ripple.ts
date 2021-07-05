import { on } from 'packages/utils/dom';
import { Directive } from 'vue';

export const ripple: Directive & { name: string } = {
  name: 'ripple',
  mounted(el: HTMLElement) {
    const rippleEl = document.createElement('div');
    const startFadeOut = (event: MouseEvent) => {
      if (el.offsetWidth > el.offsetHeight) {
        rippleEl.style.height = el.offsetWidth + 20 + 'px';
        rippleEl.style.width = el.offsetWidth + 20 + 'px';
      } else if (el.offsetHeight > el.offsetWidth) {
        rippleEl.style.height = el.offsetHeight + 20 + 'px';
        rippleEl.style.width = el.offsetHeight + 20 + 'px';
      }
      rippleEl.style.top = event.clientX + 'px';
      rippleEl.style.left = event.clientY + 'px';
      rippleEl.style.transition = 'all .3 ease-in-out';
    };

    rippleEl.style.width = '0px';
    rippleEl.style.height = '0px';
    rippleEl.style.borderRadius = '50%';
    on(el, 'click', startFadeOut);
  },
};
