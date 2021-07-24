import { mount } from '@vue/test-utils';
import Tooltip from '../src/index.vue';

const AXIOM = '日后再来';

describe('Tooltip.vue', () => {
  test('render test', () => {
    const wrapper = mount(Tooltip, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
