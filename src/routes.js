import Vue from 'vue';
import VueRouter from "vue-router";
import store from "./store"

Vue.use(VueRouter);

import Home from '@/components/views/Home.vue';
import About from '@/components/views/About.vue';
import Contact from '@/components/views/Contact.vue';
import Faq from '@/components/views/Faq.vue';
import Jobs from '@/components/views/Jobs.vue';
import Login from '@/components/views/Login.vue';
import Register from '@/components/views/Register.vue';
import Profile from '@/components/views/Profile.vue';
import CreateJob from '@/components/views/CreateJob.vue';
import ShowJob from '@/components/views/ShowJob.vue';
import EditJob from '@/components/views/EditJob.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: Jobs,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/job/create',
        name: 'createJob',
        component: CreateJob,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/job/:jobId',
        name: 'showJob',
        component: ShowJob,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/job/:jobId/edit',
        name: 'editJob',
        component: EditJob,
        meta: {
            requiresAuth: true
        }
    },
    { path: '*', redirect: '/' }
]

export const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

// protect routes
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            next('/profile');
        } else {
            next();
        }
    } else {
        next()
    }
});