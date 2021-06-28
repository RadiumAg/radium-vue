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

export interface IrowProps {
  raFlex: number;
  raOffset: number;
  raOrder: number;
  raPull: number;
  raPush: number;
  raSpan: number;
  raXs: number | SizeObject;
  raSm: number | SizeObject;
  raMd: number | SizeObject;
  raLg: number | SizeObject;
  raXl: number | SizeObject;
  raXXl: number | SizeObject;
}

export interface IColProps {
  raAlign: string;
  raGutter: number | number[];
  raJustify: string;
}
