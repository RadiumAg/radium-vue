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

  static getOffsetVertical(raOffset: number) {
    let result = 0;
    if (this.instanceArray.length) {
      this.instanceArray.forEach((obj, index) => {
        const preInstanceOffsetHeight = (this.instanceArray[index].vm
          .el as HTMLElement).offsetHeight;
        if (this.instanceArray.length && index === 0)
          result = result + raOffset * 2 + preInstanceOffsetHeight;
        else result = result + raOffset + preInstanceOffsetHeight;
      });
    } else result = raOffset;
    return result;
  }

  static restartTheOffset(id: symbol, offset: number) {
    const targetInstanceIndex = this.instanceArray.findIndex(_ => _.id === id);
    let result = 0;
    this.instanceArray.splice(targetInstanceIndex, 1);
    this.instanceArray.forEach((v, index) => {
      let preInstanceOffsetHeight = 0;
      if (index > 0) {
        preInstanceOffsetHeight = (this.instanceArray[index - 1].vm
          .el as HTMLElement).offsetHeight;
        result = result + preInstanceOffsetHeight + offset;
      } else if (index === 0) {
        result = offset;
      }
      v.vm.el.style.top = result + 'px';
    });
  }

  static create(options: TMessageOptions) {
    const container = document.createElement('div');
    const offsetVertical = options.raOffset || 20;
    const offset = this.getOffsetVertical(offsetVertical);
    const symbol = Symbol();
    const vm = createVNode(
      MessageConstructor,
      {
        ...options,
        raOffset: offset,
        raType: options.raType,
      },
      isVNode(options.raMessage) ? { default: () => options.raMessage } : null,
    );

    vm.props.onRaDestroy = () => {
      render(null, container);
      this.restartTheOffset(symbol, offsetVertical);
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
