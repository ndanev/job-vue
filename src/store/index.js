import Vue from "vue";
import Vuex from "vuex";
import Api from '@/services/Api'
import Auth from "./modules/Auth";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        jobs: [],
        job: null
    },
    actions: {
        /* api request to get all jobs */
        getJobs: ({ commit }, search) => {
            Api().get('/job', { params: { search } }).then(response => {
                commit('SET_JOBS', response.data);
            }).catch(error => console.log(error));
        },
        /* api request to get single jobs */
        getJob: ({ commit }, id) => {
            Api().get(`/job/${id}`).then(response => {
                commit('SET_JOB', response.data);
            })
        },
        /* api request to get create a new job */
        createJob: ({ commit }, job) => {
            Api().post('/job', job).then(response => {
                commit('SET_NEW_JOB', response.data);
            }).catch(error => console.log(error));
        }
    },

    mutations: {
        SET_JOBS: (state, jobs) => state.jobs = jobs,
        SET_NEW_JOB: (state, jobs) => state.jobs.unshift(jobs),
        SET_JOB: (state, job) => state.job = job
    },

    getters: {
        processedJobs: (state) => {
            try {
                let jobs = state.jobs
                return jobs
            } catch (error) {
                console.error(error.message)
            }
        }
    },

    modules: {
        Auth
    }
});