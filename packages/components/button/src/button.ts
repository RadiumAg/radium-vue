type ButtonType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'
  | 'default';

type ButtonSize = 'medium' | 'small' | 'mini';

const buttonProps = {
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
  },
  icon: {
    type: String,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
};

export { buttonProps };

export type { ButtonSize, ButtonType };
