<template>
  <div class="row">
    <div class="col-md-12 mb-3" v-for="job in jobs" :key="job._id">
      <div class="job-card">
        <div class="job-card-image">
          <img v-if="job.companyImageUrl" :src="job.companyImageUrl" :alt="job.jobTitle" />
          <img v-else src="@/assets/images/company-logo-placeholder.jpg" :alt="job.jobTitle" />
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
</template>

<script>
export default {
  name: "jobListComponent",
  props: ["jobs"]
};
</script>

<style>
</style>