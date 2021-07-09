import { mount } from '@vue/test-utils';
import Grid from '../src/index.vue';

const AXIOM = 'Rem is the best girl';

describe('Grid.vue', () => {
  test('render test', () => {
    const wrapper = mount(Grid, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });
});
