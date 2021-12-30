import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Header from '@/components/partials/Header.vue';
import VueRouter from 'vue-router';

// Test component when user is not authenticated
describe('Header.vue', () => {

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
                            return false;
                        },
                    },
                },
            },
        });

        wrapper = shallowMount(Header, {
            localVue,
            store,
            stubs: ['router-link']
        });
    });

    it('Test header component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Test logo', () => {
        const logo = wrapper.get("[data-test=logo]");
        expect(logo.exists()).toBe(true);
        expect(logo.props("to")).toBe("/");
    });

    it('Test the home navigation link', () => {
        const homeLink = wrapper.get("[data-test=home]");
        expect(homeLink.exists()).toBe(true);
        expect(homeLink.props("to")).toBe("/");
    });

    it('Test the about navigation link', () => {
        const aboutLink = wrapper.get("[data-test=about]");
        expect(aboutLink.exists()).toBe(true);
        expect(aboutLink.props("to")).toBe("/about");
    });

    it('Test the contact navigation link', () => {
        const contactLink = wrapper.get("[data-test=contact]");
        expect(contactLink.exists()).toBe(true);
        expect(contactLink.props("to")).toBe("/contact");
    });

    it('Test the F&Q navigation link', () => {
        const faqLink = wrapper.get("[data-test=faq]");
        expect(faqLink.exists()).toBe(true);
        expect(faqLink.props("to")).toBe("/faq");
    });

    it('Test the browse jobs navigation link', () => {
        const browseJobsLink = wrapper.get("[data-test=browse-jobs]");
        expect(browseJobsLink.exists()).toBe(true);
        expect(browseJobsLink.props("to")).toBe("/jobs");
    });

    it('Test the login navigation link', () => {
        const loginLink = wrapper.get("[data-test=login]");
        expect(loginLink.exists()).toBe(true);
        expect(loginLink.props("to")).toBe("/login");
    });

    it('Test the register navigation link', () => {
        const registerLink = wrapper.get("[data-test=register]");
        expect(registerLink.exists()).toBe(true);
        expect(registerLink.props("to")).toBe("/register");
    });

    it('Test the create job navigation link', () => {
        const createJobLink = wrapper.get("[data-test=create-job]");
        expect(createJobLink.exists()).toBe(true);
        expect(createJobLink.props("to")).toBe("/job/create");
    });

});


// Test component when user is authenticated
describe('Header.vue', () => {

    let wrapper;

    beforeAll(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(VueRouter);
        const router = new VueRouter();

        const store = new Vuex.Store({
            modules: {
                Auth: {
                    actions: {
                        logout: () => {
                            return true
                        }
                    },
                    getters: {
                        isLoggedIn: () => {
                            return true;
                        },
                    },
                },
            },
        });

        wrapper = shallowMount(Header, {
            localVue,
            store,
            router,
            stubs: ['router-link'],
        });
    });

    it('Test header component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Test the profile navigation link', () => {
        const profileLink = wrapper.get("[data-test=profile]");
        expect(profileLink.exists()).toBe(true);
        expect(profileLink.props("to")).toBe("/profile");
    });

    it('Test the logout navigation button', () => {
        const mockLogoutUser = jest.fn();
        const mockCloseMenu = jest.fn();
        wrapper.vm.logoutUser = mockLogoutUser;
        wrapper.vm.closeMenu = mockCloseMenu;
        wrapper.get("[data-test=logout]").trigger("click");
        expect(mockLogoutUser).toHaveBeenCalled();
        expect(mockCloseMenu).toHaveBeenCalled();
    });

    // it('Test the logout navigation button ', () => {
    //     const mockPush = jest.fn();
    //     wrapper.vm.$router.push = mockPush;
    //     expect(mockPush).toHaveBeenCalledWith('/login');
    // });
});