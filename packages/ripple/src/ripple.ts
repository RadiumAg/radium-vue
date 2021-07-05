import { on } from '@radium-vue/utils/dom';
import { Directive } from 'vue';

export const ripple: Directive & { name: string } = {
  name: 'ripple',
  mounted(el: HTMLElement) {
    console.log(2);
    let animateSign = 0;
    const rippleEl = document.createElement('div');
    const clientReact = el.getBoundingClientRect();
    let diameter = 0;
    function restart() {
      // rippleEl.style.transition = '';
      // rippleEl.style.transform = 'scale(0)';
    }

    function change() {
      const rippleScale =
        Number.parseFloat(
          rippleEl.style.transform.match(/([0-1].?[0-9]*))/)[0],
        ) + 0.1;
      console.log(
        Number.parseFloat(
          rippleEl.style.transform.match(/([0-1](.[0-9])*)/)[0],
        ),
      );
      rippleEl.style.transform = `translate(-50%,-50%) scale(${rippleScale})`;
      animateSign = requestAnimationFrame(change);
      if (rippleScale > 1) {
        rippleEl.style.transform = `translate(-50%,-50%) scale(0)`;
        cancelAnimationFrame(animateSign);
      }
    }

    function startFadeOut(event: MouseEvent) {
      rippleEl.style.top = event.clientY - clientReact.y + 'px';
      rippleEl.style.left = event.clientX - clientReact.x + 'px';
      requestAnimationFrame(change);
    }

    if (el.offsetWidth >= el.offsetHeight) {
      diameter = el.offsetHeight + 20;
    } else if (el.offsetHeight >= el.offsetWidth) {
      diameter = el.offsetWidth + 20;
    }
    rippleEl.style.height = diameter + 'px';
    rippleEl.style.width = diameter + 'px';
    rippleEl.style.backgroundColor = 'rgba(0,0,0,.3)';
    rippleEl.style.transform = 'translate(-50%,-50%) scale(0) ';
    rippleEl.style.position = 'absolute';
    rippleEl.style.transformOrigin = '50% 50%';
    rippleEl.style.borderRadius = '50%';
    rippleEl.style.zIndex = '9999';
    el.appendChild(rippleEl);
    on(el, 'click', startFadeOut);
  },
};
