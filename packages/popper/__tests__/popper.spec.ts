import { mount } from '@vue/test-utils'
import Popper from '../src/index.vue'

const AXIOM = '日后再来'

describe('Popper.vue', () => {
  test('render test', () => {
    const wrapper = mount(Popper, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
