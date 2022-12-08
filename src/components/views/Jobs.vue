<template>
  <div class="mt-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <search-job />
        </div>
      </div>
      <loading v-if="loading" />
      <div class="row" v-if="jobs">
        <div class="col-md-12">
          <div class="job-result">The result: {{jobs.length}}</div>
        </div>
      </div>
      <job-list-component :jobs="jobs"></job-list-component>
    </div>
  </div>
</template>

<script>
import JobsService from "@/services/JobsService";
import SearchJob from "@/components/SearchJob.vue";
import Loading from "@/components/Loading";
import jobListComponent from "@/components/jobs/jobListComponent";

export default {
  name: "Jobs",
  components: {
    SearchJob,
    Loading,
    jobListComponent
  },
  data() {
    return {
      jobs: [],
      loading: false
    };
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.loading = true;
        this.jobs = (await JobsService.getAllJobs(value)).data;
        this.loading = false;
      }
    }
  }
};
</script>