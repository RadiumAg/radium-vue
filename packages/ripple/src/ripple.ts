import { on } from '@radium-vue/utils/dom';
import { TRadiumDirectvie } from '@radium-vue/utils/types';
import { RadiumSqrt } from '@radium-vue/utils/common';

const processSpeed = 0.03;
const translationDuration = 200;

export const ripple: TRadiumDirectvie = {
  name: 'ripple',
  mounted(el: HTMLElement) {
    const rippleContainer = document.createElement('div');
    const clientReact = el.getBoundingClientRect();
    let diameter = 0;
    rippleContainer.className = 'ra-ripple';
    el.appendChild(rippleContainer);
    function change(rippleEl: HTMLElement) {
      const rippleScale =
        Number.parseFloat(
          rippleEl.style.transform.match(/[0-1]\.?[0-9]{0,4}/g)[2],
        ) + processSpeed;
      rippleEl.style.transform = `translate(-50%,-50%) scale(${rippleScale})`;
      if (rippleScale > 1) {
        endFadeOut(rippleEl);
        return;
      }
      requestAnimationFrame(() => {
        change(rippleEl);
      });
    }

    const startFadeIn = (event: MouseEvent) => {
      const rippleEl = document.createElement('div');
      diameter = RadiumSqrt(el.clientHeight, el.clientWidth) * 2;
      rippleEl.style.top = event.clientY - clientReact.y + 'px';
      rippleEl.style.left = event.clientX - clientReact.x + 'px';
      rippleEl.style.transform = `translate(-50%,-50%) scale(0)`;
      setTheRippleEL(rippleEl);
      setTheRippleElSize(rippleEl);
      rippleContainer.appendChild(rippleEl);
      change(rippleEl);
    };

    function endFadeOut(rippleEl: HTMLElement) {
      rippleEl.style.opacity = '0';
      const timerSign = setTimeout(() => {
        rippleContainer.removeChild(rippleEl);
        clearTimeout(timerSign);
      }, 400);
    }

    function setTheRippleEL(rippleEl: HTMLElement) {
      rippleEl.style.transition = `opacity ${translationDuration /
        1000}s  ease-in-out`;
      rippleEl.classList.add('ra-ripple__item');
      rippleEl.style.transform = 'translate(-50%,-50%) scale(0) ';
    }

    function setTheRippleElSize(rippleEl: HTMLElement) {
      rippleEl.style.height = diameter + 'px';
      rippleEl.style.width = diameter + 'px';
    }

    on(el, 'mousedown', startFadeIn);
  },

  unmounted(el: HTMLElement) {
    console.log(el);
  },
};
