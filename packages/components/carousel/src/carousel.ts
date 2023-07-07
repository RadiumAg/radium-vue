import type { InjectionKey, Ref } from 'vue';

type ClickType = 'left' | 'right';

interface CarouselItem {
  uid: number;
  transformItem: (
    index: number,
    activeIndex: number,
    isAnimate?: boolean,
  ) => void;
}

const CarouselItemConfig = {
  horizontal: {
    translate: 'translateX',
    offset: 'offsetWidth',
  },
  vertical: {
    translate: 'translateY',
    offset: 'offsetHeight',
  },
};

interface CarouselProvide {
  isLoop: Ref<boolean>;
  itemReact: CarouselItem[];
  offsetHeight: Ref<number | undefined>;
  offsetWidth: Ref<number | undefined>;
  oldActiveIndex: Ref<number | undefined>;
}

const CAROUSEL_ITEM_PROVIDE_TOKEN: InjectionKey<CarouselProvide> =
  Symbol('CAROUSEL_PROVIDE');

export { CAROUSEL_ITEM_PROVIDE_TOKEN, CarouselItemConfig };
export type { ClickType, CarouselProvide, CarouselItem };
