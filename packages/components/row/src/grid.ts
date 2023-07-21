import type { InjectionKey } from 'vue';

type RaJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';

type RaAlign = 'top' | 'middle' | 'buttom';

type SizeObject = {
  span: number;
  offset: number;
};

const ROW_INJECT_TOKEN: InjectionKey<RowInject> = Symbol('ROW_INJECT_TOKEN');

interface RowInject {
  gutter: number | number[];
}

export { RowInject, ROW_INJECT_TOKEN };
export type { SizeObject, RaAlign, RaJustify };
