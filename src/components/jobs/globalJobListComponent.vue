<template>
  <div class="row mt-5">
    <div v-for="(job, index) in globalJobs" :key="index" class="col-lg-12">
      <div class="globa-job-card mb-3">
        <div v-if="job.remote" class="globa-job-remote">Remote</div>
        <h4 class="globa-job-title">{{job.title}}</h4>
        <h6 class="globa-job-company-name mb-3">{{job.company_name}} - {{job.location}}</h6>
        <div v-if="job.tags && job.tags.length > 0" class="my-2">
          <span v-for="(tag, index) in job.tags" :key="index" class="global-job-tag">{{tag}}</span>
        </div>
        <a :href="job.url" target="_blank" class="globa-job-link">Apply</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "globalJobListComponent",
  props: ["globalJobs"]
};
</script>