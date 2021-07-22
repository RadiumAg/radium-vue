import { mount } from '@vue/test-utils';
import Loading from '../src/index.vue';

const AXIOM = '日后再来';

describe('Loading.vue', () => {
  test('render test', () => {
    const wrapper = mount(Loading, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
