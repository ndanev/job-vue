import Api from '@/services/Api';

export default {
    getAllJobs(search) {
        return Api().get('/jobs/get-jobs', { params: { search: search } });
    },
    showSingleJob(jobId) {
        return Api().get(`/jobs/single-job/${jobId}`);
    },
    createJob(job) {
        return Api().post('/jobs/create-job', job);
    },
    updateSingleJob(job) {
        return Api().put(`/jobs/edit-job/${job._id}`, job);
    }
}