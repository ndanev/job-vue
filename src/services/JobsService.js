import Api from '@/services/Api';

export default {
    getAllJobs(search) {
        return Api().get('/get-jobs', { params: { search: search } });
    },
    showSingleJob(jobId) {
        return Api().get(`/single-job/${jobId}`);
    },
    createJob(job) {
        return Api().post('/create-job', job);
    },
    updateSingleJob(job) {
        return Api().put(`/edit-job/${job._id}`, job);
    }
}