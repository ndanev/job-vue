import { shallowMount } from '@vue/test-utils'
import Home from '@/components/views/Home.vue'

describe('Home.vue', () => {
    it('Check for the home page', () => {
        const wrapper = shallowMount(Home, {
            stubs: ['router-link']
        });
        expect(wrapper.exists()).toBe(true);
    });
});