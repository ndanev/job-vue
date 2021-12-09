import axios from 'axios';

const state = {
    token: localStorage.getItem("token") || '',
    user: {},
    status: ''
};

const getters = {
    isLoggedIn: function (state) {
        if (state.token !== '') {
            return true;
        } else {
            return false;
        }
    },
    authState: state => state.status,
    user: state => state.user
};

const actions = {
    async login({ commit }, user) {
        commit('auth_request');
        // TODO: Do not hardcode baseURL 
        let response = await axios.post('http://localhost:5001/api/users/login', user);
        if (response.data.success) {
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
        }

        return response;
    },
    async register({ commit }, userData) {
        commit('register_request');
        let response = await axios.post('http://localhost:5001/api/users/register', userData);
        if (response.data.success !== undefined) {
            commit('register_success');
        }
        return response;
    },
    async getProfile({ commit }) {
        commit('profile_request');
        let response = await axios.get('http://localhost:5001/api/users/profile');
        commit('user_profile', response.data.user)
        return response;
    },
    logout({ commit }) {
        localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        return;
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token,
            state.user = user,
            state.status = 'success'
    },
    register_request(state) {
        state.status = 'loading'
    },
    register_success(state) {
        state.status = 'success'
    },
    logout(state) {
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}