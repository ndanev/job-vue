<template>
  <section class="section-global-jobs">
    <loading v-if="loading" :class="loading ? 'mt-5' : ''" />
    <div v-if="globalJobs && globalJobs.length > 0" class="container">
      <div class="row mt-5">
        <div class="col-lg-6">
          <h3>Arbeitnow API Jobs</h3>
          <div>The Results: {{ globalJobs.length }}</div>
        </div>
        <div class="col-lg-6 text-right">
          <a href="https://www.arbeitnow.com/" target="_blank">
            <img src="@/assets/images/arbeitnow-logo.png" width="200px" alt="Arbeitnow Logo" />
          </a>
        </div>
      </div>
      <global-job-list-component :globalJobs="globalJobs"></global-job-list-component>
    </div>
    <div v-else-if="globalJobs.length <= 0 && !loading" class="container">
      <div class="row mt-4">
        <div class="col-12">Currently there is no jobs.</div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Loading from "@/components/Loading";
import globalJobListComponent from "@/components/jobs/globalJobListComponent";
export default {
  name: "GlobalJobs",
  components: {
    Loading,
    globalJobListComponent
  },
  data() {
    return {
      globalJobs: [],
      loading: false
    };
  },
  mounted() {
    this.getGlobalJobs()
  },
  methods: {
    async getGlobalJobs() {
      const apiUrl = 'https://www.arbeitnow.com/api/job-board-api?page=1'
      try {
        this.loading = true;
        const { data } = await axios.get(apiUrl)
        this.globalJobs = data.data
        console.log("globalJobs",this.globalJobs)
        this.loading = false;
      } catch (error) {
        console.error(error)
        this.loading = false;
      }
    }
  }
};
</script>