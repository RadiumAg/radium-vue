import { Ref } from 'vue';
export interface scrollBarInject {
  scrollBarRef: Ref<HTMLElement>;
  moveY: Ref<number>;
  isHover: Ref<boolean>;
  isActive: Ref<boolean>;
}

export const SCROLL_BAR_INJECT_TOKEN = 'SCROLL BAR INJECT TOKEN';

export const PROP_MAP: {
  [key: string]: {
    mouseStart: string;
    mouseEnd: string;
    size: string;
    clinetSize: string;
    scrollSize: string;
    pageCoordinate: string;
    scrollDirection: string;
    translate: string;
    move: string;
  };
} = {
  x: {
    size: 'width',
    move: 'moveX',
    clinetSize: 'clientWidth',
    scrollSize: 'scrollWidth',
    mouseStart: 'startX',
    mouseEnd: 'endX',
    pageCoordinate: 'pageX',
    scrollDirection: 'scrollLeft',
    translate: 'translateX',
  },
  y: {
    move: 'moveY',
    size: 'height',
    clinetSize: 'clientHeight',
    scrollSize: 'scrollHeight',
    mouseStart: 'startY',
    mouseEnd: 'endY',
    pageCoordinate: 'pageY',
    scrollDirection: 'scrollTop',
    translate: 'translateY',
  },
};
