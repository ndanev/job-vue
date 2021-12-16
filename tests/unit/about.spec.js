import { mount } from '@vue/test-utils'
import About from '@/components/views/About.vue'

describe('About.vue', () => {
  it('Check for content', () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toContain('A better way to job search')
  });
});