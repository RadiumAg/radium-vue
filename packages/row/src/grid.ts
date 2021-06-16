export type TRaJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

export type TRaAlign = 'top' | 'middle' | 'buttom';

export interface IRowProps {
  raGutter: number[];
  raAlign: TRaAlign;
  raJustify: TRaJustify;
}

export type SizeObject = {
  span: number;
  offset: number;
};

export const ROW_INJECT_EOKEN = 'ROW_INJECT_EOKEN';

export interface IRowInject {
  gutter: number | number[];
}
