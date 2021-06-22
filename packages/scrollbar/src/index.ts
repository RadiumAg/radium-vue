import { Ref } from 'vue';
export interface scrollBarInject {
  scrollBar: Ref<HTMLElement>;
}

export const SCROLL_BAR_INJECT_TOKEN = 'SCROLL BAR INJECT TOKEN';
