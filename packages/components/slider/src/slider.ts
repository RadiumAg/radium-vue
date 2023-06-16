import type { InjectionKey, Ref } from 'vue';

type Direction = 'x' | 'y';

type SliderProvide = {
  step: Ref<number>;
  maskAvg: Ref<number>;
  isDrag: Ref<boolean>;
  maxValue: Ref<number>;
  trackWidth: Ref<number>;
  trackHeight: Ref<number>;
  currentValue: Ref<number>;
  sliderDistance: Ref<number>;
};

type ButtonBarConfigType = {
  [key in 'x' | 'y']: {
    client: key extends 'x' ? 'clientX' : 'clientY';
    distance: key extends 'x' ? 'left' : 'top';
    track: key extends 'x' ? 'trackWidth' : 'trackHeight';
    class: key extends 'x' ? [] : ['is-vertical'];
  };
};

const SLIDER_PROVIDE_TOKEN: InjectionKey<SliderProvide> = Symbol(
  'SLIDER_PROVIDE_TOKEN',
);

const ButtonBarConfig: ButtonBarConfigType = {
  x: {
    client: 'clientX',
    distance: 'left',
    track: 'trackWidth',
    class: [],
  },
  y: {
    client: 'clientY',
    distance: 'top',
    track: 'trackHeight',
    class: ['is-vertical'],
  },
};

export { ButtonBarConfig, SLIDER_PROVIDE_TOKEN };
export type { ButtonBarConfigType, Direction, SliderProvide };
