export type TButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'default';

export type TButtonSize = 'medium' | 'small' | 'mini';

export interface IButtonPorps {
  raType: TButtonType;
  raSize: TButtonSize;
  raIcon: string;
}
