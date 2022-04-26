import { mount } from '@vue/test-utils';
import Calendar from '../src/index.vue';

const AXIOM = '日后再来';

describe('Calendar.vue', () => {
  test('render test', () => {
    const wrapper = mount(Calendar, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
