import type { InjectionKey } from 'vue';

export type RaJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

export type RaAlign = 'top' | 'middle' | 'buttom';

export type SizeObject = {
  span: number;
  offset: number;
};

export const ROW_INJECT_TOKEN: InjectionKey<RowInject> =
  Symbol('ROW_INJECT_OKEN');

export interface RowInject {
  gutter: number | number[];
}
