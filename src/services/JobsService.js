import Api from '@/services/Api';

export default {
    getAllJobs(search) {
        return Api().get('/job', { params: { search: search } });
    },
    showSingleJob(id) {
        return Api().get(`/job/${id}`);
    },
    createJob(job) {
        return Api().post('/job', job);
    },
    updateSingleJob(job) {
        return Api().put(`/job/${job._id}`, job);
    }
}