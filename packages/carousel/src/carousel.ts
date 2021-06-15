import { Ref } from 'vue';

export interface ICarouselProps {
  raHeight: string;
  raInitialIndex: number;
  raAutoplay: boolean;
  raInterval: number;
  raArrow: 'always' | 'hover' | 'never';
  raType: 'card';
  raLoop: boolean;
  raDirection: 'horizontal' | 'vertical';
  raPauseOnHover: boolean;
}

export interface ICarouselItem {
  uid: number;
  transformItem: (index: number, activeIndex: number) => void;
}

export interface ICarouselItemProps {
  raName: string;
  raLabel: string;
}

export interface ICarouselProvide {
  offsetWidth: Ref<number>;
  itemReact: ICarouselItem[];
}

export const CAROUSEL_ITEM_PROVIDETOKEN = 'CAROUSEL_PROVIDE';

export type TClickType = 'left' | 'right';
