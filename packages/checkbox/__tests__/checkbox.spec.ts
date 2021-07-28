import { mount } from '@vue/test-utils';
import Checkbox from '../src/index.vue';

const AXIOM = '日后再来';

describe('Checkbox.vue', () => {
  test('render test', () => {
    const wrapper = mount(Checkbox, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
