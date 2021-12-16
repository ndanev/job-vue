import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/components/views/Home.vue';
import VueRouter from 'vue-router';

describe('Home.vue', () => {

    let wrapper;

    beforeAll(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);

        const store = new Vuex.Store({
            modules: {
                Auth: {
                    getters: {
                        isLoggedIn: () => {
                            return false
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

    it('Check for the home page', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Check for the home page hero content', () => {
        const heroLead = wrapper.get("[data-test=hero-lead]");
        const heroTitle = wrapper.get("[data-test=hero-title]");
        const heroTitleInner = wrapper.get("[data-test=hero-inner-title]");

        /* Test hero content */
        expect(heroTitle.text()).toContain('Most popular');
        expect(heroTitleInner.text()).toBe('IT');
        expect(heroTitle.text()).toContain('opportunities.');
        expect(heroLead.text()).toBe('Read, applay and create personalized set of job matches.');
    });

    it('Check for hero router link', () => {
        const registerLink = wrapper.find("[data-test=register-link]");

        /* Test router-link path if user is not loggeIn */
        expect(registerLink.exists()).toBe(true);
        expect(registerLink.props("to")).toBe("/register");
        expect(registerLink.text()).toBe('Get Started');
    });

    it('Check for section 1', () => {
        const sectionTitle = wrapper.get("[data-test=section-1-title]");
        const sectionLead = wrapper.get("[data-test=section-1-lead]");
        const sectionBrowseLink = wrapper.get("[data-test=section-1-browse-link]");

        /* Test section 1 content */
        expect(sectionTitle.text()).toBe("We help you to find the right job");
        expect(sectionLead.text()).toBe("We believe that you deserve a job search experience that is as human and personal as you are. We go beyond simple keyword searches.");

        /* Test section 1 router-link path */
        expect(sectionBrowseLink.props("to")).toBe("/jobs");
        expect(sectionBrowseLink.text()).toBe('Find Your Right Job');
    });

    it('Check for section 2', () => {
        const sectionTitle = wrapper.get("[data-test=section-2-title]");

        /* Test section 2 title content */
        expect(sectionTitle.text()).toBe("Your Favorite Jobs with Different positions");
    });

    it('Check for section 3', () => {
        const sectionTitle = wrapper.get("[data-test=section-3-title]");
        const sectionRead = wrapper.get("[data-test=section-3-read]");
        const sectionApply = wrapper.get("[data-test=section-3-apply]");
        const sectionCreate = wrapper.get("[data-test=section-3-create]");

        /* Test section 3 content */
        expect(sectionTitle.text()).toBe("What You can do?");
        expect(sectionRead.text()).toBe("Read Our List of Jobs");
        expect(sectionApply.text()).toBe("Apply for Your Right Job");
        expect(sectionCreate.text()).toBe("Create Your Own Job");
    });
});