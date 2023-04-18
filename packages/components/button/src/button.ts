export type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'default';

export type ButtonSize = 'medium' | 'small' | 'mini';

export interface ButtonProps {
  raType: ButtonType;
  raSize: ButtonSize;

  raIcon: string;
  raPlain: boolean;
  raRound: boolean;
  raCircle: boolean;
  raDisabled: boolean;
  raLoading: boolean;
}
