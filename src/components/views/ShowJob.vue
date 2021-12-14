<template>
  <div>
    <hero class="hero-show-job">
      <div class="container">
        <div class="row">
          <div class="col-md-12 d-flex align-items-center justify-content-between">
            <div class="single-job-title">
              <img :src="job.companyImageUrl" alt />
              <div>
                <h1 class="hero-title">{{job.jobTitle}}</h1>
                <div class="single-job-title-text">
                  <span class="single-job-title-at">at</span>
                  <span>{{job.companyName}}</span> -
                  <a
                    v-if="job.applicationTarget !== null"
                    :href="job.applicationTarget"
                    target="_blank"
                    class="single-job-link single-job-link-website"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    {{job.applicationTarget}}
                  </a>
                </div>
              </div>
            </div>
            <div class="single-job-edit">
              <router-link
                :to="{ name: 'editJob', params: { jobId: job._id }}"
                class="primary-button d-block"
              >
                <i class="far fa-edit"></i>
                <span class="d-none d-md-inline">Edit Job</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </hero>
    <div class="single-job-info">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="single-job-info-title">Location</div>
            <div class="single-job-info-value">{{job.location}}</div>
          </div>
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="single-job-info-title">Job Type</div>
            <div class="single-job-info-value">{{job.jobType}}</div>
          </div>
          <div class="col-md-3 mb-3 mb-md-0">
            <div class="single-job-info-title">Salary</div>
            <div class="single-job-info-value">
              <span class="mr-2">{{job.currency}}</span>
              <span>{{job.minSalary}}</span> -
              <span>{{job.maxSalary}}</span>
            </div>
          </div>
          <div class="col-md-3">
            <div class="single-job-info-title">Posted</div>
            <div class="single-job-info-value">{{job.date | formatDate(job.date)}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="single-job-company">
      <div class="container">
        <div class="row">
          <div class="col-md-9 mb-5">
            <h2 class="section-title">Job description</h2>
            <div class="single-job-company-text" v-html="job.jobDesc"></div>
            <div class="single-job-company-skills">
              <div class="job-card-technologies">
                <span
                  v-for="(skill, index) in job.skills"
                  :key="index"
                  class="job-card-technologies-item"
                >{{skill}}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="single-job-apply">
              <a :href="'mailto:' + job.emailAddress" class="apply-button">Apply Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobsService from "@/services/JobsService";
import Hero from "@/components/Hero";
export default {
  name: "ShowJob",
  components: {
    Hero
  },
  data() {
    return {
      job: {}
    };
  },
  async mounted() {
    const jobId = this.$route.params.jobId;
    this.job = (await JobsService.showSingleJob(jobId)).data;
  }
};
</script>