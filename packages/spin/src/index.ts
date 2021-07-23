import PopupManager from '@radium-vue/utils/popup-manager';
import {
  defineComponent,
  h,
  Transition,
  withCtx,
  withDirectives,
  createVNode,
  vShow,
  VNode,
  render,
  nextTick,
} from 'vue';

export type TSpinParams = Partial<{
  target: HTMLElement;
  viewBox: string;
  svg: string;
  spinText: string;
  iconClass: string;
  background: string;
  fullScreen: boolean;
  isShow: boolean;
}>;

export type TSpinConfig = Partial<{
  viewBox: string;
  svg: string;
  spinText: string;
  spinIconClass: string;
  spinBackground: string;
  fullScreen: boolean;
  isShow: boolean;
  target: HTMLElement;
}>;
const spinParentClass = 'ra-spin-parent';
const defaultSvg = `<rect x="15" y="19" width="4" height="12" class="ra-spin__default-icon">
                        <animate attributeName="height" attributeType="XML" begin="0s" dur="0.6s" values="12;26;12" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML"  begin="0s" dur="0.6s"  values="19;12;19" repeatCount="indefinite"></animate>
                    </rect>
                    <rect x="25" y="15" width="4" height="20" class="ra-spin__default-icon">
                        <animate attributeName="height" attributeType="XML"  begin="0.15s" dur="0.6s" values="12;26;12" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML"  begin="0.15s" dur="0.6s" values="19;12;19" repeatCount="indefinite"></animate>
                    </rect>
                    <rect x="35" y="19" width="4" height="12" class="ra-spin__default-icon">
                        <animate attributeName="height" attributeType="XML"  begin="0.3s" dur="0.6s" values="12;26;12" repeatCount="indefinite"></animate>
                        <animate attributeName="y" attributeType="XML"  begin="0.3s" dur="0.6s" values="19;12;19" repeatCount="indefinite"></animate>
                    </rect>`;
export function createSpinVirtualNode({
  viewBox = '0 0 50 50',
  svg = defaultSvg,
  spinIconClass = '',
  spinBackground = '',
  fullScreen = false,
  isShow = false,
  target,
}: TSpinConfig) {
  let vm: VNode = null;
  const container = document.createElement('div');
  const spinComponent = defineComponent({
    render() {
      const spin = h('svg', {
        viewBox: viewBox,
        width: 50,
        height: 50,
        innerHTML: svg,
      });
      const spinClass = h('i', { class: spinIconClass });

      return h(
        Transition,
        {
          name: 'ra-spin-fade',
        },
        {
          default: withCtx(() => [
            withDirectives(
              createVNode(
                'div',
                {
                  style: {
                    background: spinBackground,
                    zIndex: PopupManager.getZIndex(),
                  },
                  class: ['ra-spin', fullScreen ? 'is-fullscreen' : ''],
                },
                [spinIconClass ? spinClass : spin],
              ),
              [[vShow, isShow]],
            ),
          ]),
        },
      );
    },
  });

  target.classList.add(spinParentClass);
  vm = createVNode(spinComponent);
  render(vm, container);

  return {
    vm,
    close() {
      target.classList.remove(spinParentClass);
      render(null, container);
    },
    get $el() {
      return container.firstChild;
    },
  };
}

export async function CreateSpin(config: TSpinConfig) {
  config.fullScreen && (config.target = document.body);
  const { vm: instance, $el, close } = createSpinVirtualNode(config);
  await nextTick();
  config.target.appendChild($el);
  return { vn: instance, close };
}
