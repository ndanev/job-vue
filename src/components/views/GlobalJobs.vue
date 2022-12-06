<template>
  <section class="section-global-jobs">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <h1>Global Jobs</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div v-for="(job, index) in globalJobs" :key="index" class="col-lg-12">
          <div class="globa-job-card mb-3">
            <div v-if="job.remote" class="globa-job-remote">Remote</div>
            <h4 class="globa-job-title">{{job.title}}</h4>
            <h6 class="globa-job-company-name mb-3">{{job.company_name}} - {{job.location}}</h6>
            <div v-if="job.tags && job.tags.length > 0" class="my-2">
              <span v-for="(tag, index) in job.tags" :key="index" class="global-job-tag">{{tag}}</span>
            </div>
            <!-- <div v-if="job.description"></div> -->
            <!-- <router-link :to="{ name: 'showGlobalJob', params: { slug: job.slug }}">View More</router-link> -->
            <a :href="job.url" target="_blank" class="globa-job-link">Apply</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: "GlobalJobs",
  components: {},
  data() {
    return {
      globalJobs: []
    };
  },
  created() {
    this.getGlobalJobs()
  },
  methods: {
    async getGlobalJobs() {
      const apiUrl = 'https://www.arbeitnow.com/api/job-board-api?page=2'
      try {
        const { data } = await axios.get(apiUrl)
        this.globalJobs = data.data
        console.log("globalJobs", this.globalJobs)
      } catch (error) {
        console.error(error)
      }
    }
  }
};
</script>
<style lang="css">
.globa-job-card {
  background-color: white;
  padding: 1rem;
  position: relative;
  border-radius: 5px;
}
.globa-job-remote {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 1rem;
  background-color: #32d6a1;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
}
.global-job-tag {
  margin-right: 1rem;
  font-size: 12px;
  background-color: #746fbf;
  color: white;
  padding: 5px 8px;
  border-radius: 5px;
}
.globa-job-link {
  color: #746fbf;
  font-weight: bold;
  margin: 1rem 0 0 0;
  display: inline-block;
  transition: all 0.25s;
  border: 2px solid #746fbf;
  padding: 5px 16px;
  border-radius: 5px;
}
.globa-job-link:hover {
  text-decoration: none;
  color: inherit;
}
</style>