export interface CarouselProps {
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

export interface CarouselItem {
  active: boolean;
  key: string;
  transformItem: () => {};
}

export interface CarouselItemProps {
  raName: string;
  raLabel: string;
}
