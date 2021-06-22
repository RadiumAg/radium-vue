import { Ref } from 'vue';
export interface scrollBarInject {
  scrollBarRef: Ref<HTMLElement>;
  moveY: Ref<number>;
}

export const SCROLL_BAR_INJECT_TOKEN = 'SCROLL BAR INJECT TOKEN';
