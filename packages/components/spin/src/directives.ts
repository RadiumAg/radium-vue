import { RadiumDirective } from '@radium-vue/utils/types';
import { VNode } from 'vue';
import { CreateSpin, TSpinParams } from '.';

const spin: RadiumDirective<
  HTMLElement & { instance: { vn: VNode; close: () => void } },
  TSpinParams
> = {
  name: 'spin',

  async mounted(el, binding) {
    el.instance = await CreateSpin({
      isShow: binding.value.isShow,
      viewBox: binding.value.viewBox,
      svg: binding.value.svg,
      spinText: binding.value.spinText,
      spinIconClass: binding.value.iconClass,
      spinBackground: binding.value.background,
      fullScreen: binding.modifiers.fullScreen,
      target: binding.value.target || el,
    });
  },

  async updated(el, binding) {
    const instance = el.instance;
    if (binding.value.isShow === binding.oldValue.isShow) return;

    if (binding.value.isShow) {
      el.instance = await CreateSpin({
        ...binding.value,
        target: binding.value.target || el,
      });
    } else {
      instance.close();
      el.instance = null;
    }
  },
};

export class SpinServices {
  static create() {}
}

export default spin;
