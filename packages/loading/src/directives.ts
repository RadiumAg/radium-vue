import { TRadiumDirective } from '@radium-vue/utils/types';

const loading: TRadiumDirective<HTMLElement, boolean> = {
  name: 'loading',

  mounted(el, binding) {
    const options = {
      text: el.getAttribute('ra-loading-text'),
      spinner: el.getAttribute('ra-icon-loading'),
      background: el.getAttribute('ra-loading-background'),
    };
  },
};

export default loading;
