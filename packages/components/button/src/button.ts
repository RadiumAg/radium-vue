export type TButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'default';

export type TButtonSize = 'medium' | 'small' | 'mini';

export interface IButtonProps {
  raType: TButtonType;
  raSize: TButtonSize;
  raIcon: string;
  raPlain: boolean;
  raRound: boolean;
  raCircle: boolean;
  raDisabled: boolean;
  raLoading: boolean;
}
