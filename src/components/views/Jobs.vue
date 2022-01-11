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
        <div class="col-md-12 mb-3" v-for="job in jobs" :key="job._id">
          <div class="job-card">
            <div class="job-card-image">
              <img :src="job.companyImageUrl" alt />
            </div>
            <div class="job-card-content">
              <div class="job-card-title">
                <router-link :to="{ name: 'showJob', params: { jobId: job._id }}">{{job.jobTitle}}</router-link>
              </div>
              <div class="job-card-company">
                <span>{{job.companyName}}</span>
                - {{job.location}}
              </div>
              <div class="job-card-technologies">
                <span
                  v-for="(skill, index) in job.skills"
                  :key="index"
                  class="job-card-technologies-item"
                >{{skill}}</span>
              </div>
              <div class="job-card-desc" v-html="job.jobDesc.substring(0,100)"></div>
            </div>
            <div class="job-card-type bg-yellow">{{job.jobType}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobsService from "@/services/JobsService";
import { mapActions } from 'vuex';
import SearchJob from "@/components/SearchJob.vue";
import Loading from "@/components/Loading";

export default {
  name: "Jobs",
  components: {
    SearchJob,
    Loading
  },
  data() {
    return {
      // jobs: [],
      loading: false
    };
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  async mounted() {
    await this.$store.dispatch('getJobs');
  },
  watch: {
    ...mapActions(["getJobs"]),
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.loading = true;
        this.jobs = (await JobsService.getAllJobs(value)).data;
        // this.jobs = await this.getJobs(value);
        this.loading = false;
      }
    }
  }
};
</script>