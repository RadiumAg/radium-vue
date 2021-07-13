import { render, VNode } from 'vue';
import { createVNode, isVNode } from 'vue';
import MessageConstructor from './index.vue';

type raType = 'success' | 'warning' | 'info' | 'error';

export type TMessageOptions = Partial<{
  raMessage: string;
  raType: raType;
  raIconClass: string;
  raDuration: number;
  raShowClose: boolean;
  raOffset: number;
  raIsUseHtmlString: boolean;
}>;

export class Message {
  private static instanceArray: { vm: VNode; id: symbol }[] = [];

  static getOffsetVertical(offset: number) {
    const offsetVertical = offset || 60;
    let result = 0;

    this.instanceArray.forEach(() => {
      result += offsetVertical;
    });

    return result;
  }

  static restartTheOffset(id: symbol, offset: number) {
    const targetInstanceIndex = this.instanceArray.findIndex(_ => _.id === id);
    this.instanceArray.splice(targetInstanceIndex, 1);
    this.instanceArray.forEach((v, index) => {
      v.vm.el.style.top = index * offset + 'px';
    });
  }

  static create(options: TMessageOptions) {
    const container = document.createElement('div');
    const offsetVertical = this.getOffsetVertical(options.raOffset);
    const symbol = Symbol();
    const vm = createVNode(
      MessageConstructor,
      {
        ...options,
        raOffset: offsetVertical,
        raType: options.raType,
      },
      isVNode(options.raMessage) ? { default: () => options.raMessage } : null,
    );

    vm.props.onRaDestroy = () => {
      render(null, container);
      this.restartTheOffset(symbol, options.raOffset || 60);
    };

    this.instanceArray.push({ vm, id: symbol });
    render(vm, container);
    document.body.appendChild(container.firstChild);
  }

  static success(options: { raOffset: number; raMessage: string }) {
    this.create({ ...options, raType: 'success' });
  }

  static error(options: { raOffset: number; raMessage: string }) {
    this.create({ ...options, raType: 'error' });
  }

  static info(options: { raOffset: number; raMessage: string }) {
    this.create({ ...options, raType: 'info' });
  }

  static warning(options: { raOffset: number; raMessage: string }) {
    this.create({ ...options, raType: 'warning' });
  }
}
