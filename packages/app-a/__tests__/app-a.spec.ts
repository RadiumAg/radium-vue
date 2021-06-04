import { mount } from '@vue/test-utils';
import AppA from '../src/index.vue';

const AXIOM = 'Rem is the best girl';

describe('AppA.vue', () => {
  test('render test', () => {
    const wrapper = mount(AppA, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
