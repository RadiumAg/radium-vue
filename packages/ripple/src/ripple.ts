import { on } from '@radium-vue/utils/dom';
import { TRadiumDirective } from '@radium-vue/utils/types';
import { RadiumSqrt } from '@radium-vue/utils/common';
import { isNull } from 'lodash';

const processSpeed = 0.03;
const translationDuration = 200;

const ripple: TRadiumDirective<HTMLElement, boolean> = {
  name: 'ripple',
  mounted(el, binding) {
    if (binding.value !== undefined && !binding.value) {
      return;
    }
    const rippleContainer = document.createElement('div');
    let diameter = 0;
    rippleContainer.className = 'ra-ripple';
    el.appendChild(rippleContainer);
    function change(rippleEl: HTMLElement) {
      const rippleScale =
        Number.parseFloat(
          rippleEl.style.transform.match(/[0-1]\.?[0-9]{0,4}/g)[2],
        ) + processSpeed;

      if (rippleScale > 1 && Reflect.get(rippleEl, 'isMouseUp')) {
        endFadeOut(rippleEl);
        return;
      } else if (rippleScale <= 1) {
        rippleEl.style.transform = `translate(-50%,-50%) scale(${rippleScale})`;
      }
      requestAnimationFrame(() => {
        change(rippleEl);
      });
    }

    const startFadeIn = (event: MouseEvent) => {
      if (event.button === 2) {
        return;
      }
      const clientReact = el.getBoundingClientRect();
      const rippleEl = document.createElement('div');
      diameter = RadiumSqrt(el.clientHeight, el.clientWidth) * 2;
      rippleEl.style.top = event.clientY - clientReact.y + 'px';
      rippleEl.style.left = event.clientX - clientReact.x + 'px';
      setTheRippleEL(rippleEl);
      setTheRippleElSize(rippleEl);
      rippleContainer.appendChild(rippleEl);
      change(rippleEl);
    };

    function endFadeOut(rippleEl: HTMLElement) {
      rippleEl.style.opacity = '0';
      const timerSign = setTimeout(() => {
        rippleContainer.removeChild(rippleEl);
        rippleEl.onmouseup = null;
        clearTimeout(timerSign);
      }, 400);
    }

    function setTheRippleEL(rippleEl: HTMLElement) {
      if (isNull(rippleEl.onmouseup)) {
        rippleEl.onmouseup = () => {
          Reflect.set(rippleEl, 'isMouseUp', true);
        };
        rippleEl.onmouseout = () => {
          Reflect.set(rippleEl, 'isMouseUp', true);
        };
      }
      Reflect.set(rippleEl, 'isMouseUp', false);
      rippleEl.style.transition = `opacity ${translationDuration /
        1000}s  ease-in-out`;
      rippleEl.style.transform = 'translate(-50%,-50%) scale(0) ';
      rippleEl.classList.add('ra-ripple__item');
    }

    function setTheRippleElSize(rippleEl: HTMLElement) {
      rippleEl.style.height = diameter + 'px';
      rippleEl.style.width = diameter + 'px';
    }

    on(rippleContainer, 'mousedown', startFadeIn);
  },
};

export default ripple;
