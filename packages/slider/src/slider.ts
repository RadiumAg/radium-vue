import { Ref } from 'vue';
export const UPDATE_MODEL_EVENT = 'update:modelValue';

export const SLIDER_PROVIDE_TOKEN = 'SLIDER_PROVIDE_TOKEN';

export type TSliderProvide = {
  processBarWidth: Ref<number>;
};

export const TButtonBarConfig = {
  x: {
    start: 0,
    end: 0,
    client: 'ClientX',
  },
  y: {
    start: 0,
    end: 0,
    client: 'ClientY',
  },
};
