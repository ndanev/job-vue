import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/components/views/Home.vue';

let wrapper;

beforeAll(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const store = new Vuex.Store({
        modules: {
            Auth: {
                getters: {
                    isLoggedIn: () => {
                        return true
                    },
                },
            },
        },
    });

    wrapper = shallowMount(Home, {
        localVue,
        store,
        stubs: ['router-link']
    });
});

describe('Home.vue', () => {
    it('Check for the home page', () => {
        expect(wrapper.exists()).toBe(true);
    });
});