import { mount } from '@vue/test-utils'
import Slider from '../src/index.vue'

const AXIOM = '日后再来'

describe('Slider.vue', () => {
  test('render test', () => {
    const wrapper = mount(Slider, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
