<template>
  <div class="create-job">
    <div class="container mt-5">
      <div class="row">
        <div class="offset-md-1"></div>
        <div class="col-md-10">
          <h3>Edit job</h3>
          <p>Use the form to get started. Questions? Contact us.</p>
        </div>
        <div class="offset-md-1"></div>
      </div>
      <div class="row">
        <div class="offset-md-1"></div>
        <div class="col-md-10">
          <div class="create-job-panel">
            <form @submit.prevent="update">
              <div class="form-group">
                <label for="job-title">Job title</label>
                <small
                  class="form-text"
                >Concise and clear, name the role. Omit location or job type.</small>
                <input v-model="job.title" type="text" class="form-control" id="job-title" required />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="job-type">Job type</label>
                    <select v-model="job.type" id="job-type" class="form-control" required>
                      <option selected></option>
                      <option value="full-time">Full time</option>
                      <option value="part-time">Part time</option>
                      <option value="freelance">Freelance</option>
                      <option value="internship">Internship</option>
                      <option value="temporary">Temporary</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="job-level">Level</label>
                    <small>/optional</small>
                    <select v-model="job.level" id="job-level" class="form-control" required>
                      <option selected></option>
                      <option value="beginner">Beginner</option>
                      <option value="junior">Junior</option>
                      <option value="mid-level">Mid-level</option>
                      <option value="senior">Senior</option>
                      <option value="lead">Lead</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="job-desc">Job description</label>
                <small
                  class="form-text"
                >Describe the job as clear as possible. Select any text to apply styles.</small>
                <VueEditor id="job-desc" v-model="job.description" />
              </div>
              <div class="form-group">
                <label for="job-tags">Tags</label>
                <small
                  class="form-text"
                >Include key technologies and any other tag information to help users find your job easier.</small>
                <input-tag v-model="job.skills" class="form-control" id="job-tags" required></input-tag>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="job-company-name">Company name</label>
                    <input
                      v-model="job.companyName"
                      type="text"
                      class="form-control"
                      id="job-company-name"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="job-company-image">Company image URL</label>
                    <input
                      v-model="job.companyImageUrl"
                      type="text"
                      class="form-control"
                      id="job-company-image"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="job-company-email">Company email</label>
                    <small
                      class="form-text"
                    >Send applications to this email address or provide the URL.</small>
                    <input
                      v-model="job.email"
                      type="text"
                      class="form-control"
                      id="job-company-email"
                      placeholder="yourcompany@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="job-target">Application target</label>
                    <small
                      class="form-text"
                    >Send applications to this email address or provide the URL.</small>
                    <input
                      v-model="job.target"
                      type="text"
                      class="form-control"
                      id="job-target"
                      placeholder="http://www.yoursitename.com/career"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="job-currency">Currency</label>
                    <small>/optional</small>
                    <input
                      v-model="job.currency"
                      type="text"
                      class="form-control"
                      id="job-currency"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="job-min-sallary">Min sallary</label>
                    <small>/optional</small>
                    <input
                      v-model="job.minSalary"
                      type="text"
                      class="form-control"
                      id="job-min-sallary"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="job-max-sallary">Max sallary</label>
                    <small>/optional</small>
                    <input
                      v-model="job.maxSalary"
                      type="text"
                      class="form-control"
                      id="job-max-sallary"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="job-location">Location</label>
                <small class="form-text">Job location.</small>
                <input v-model="job.location" type="text" class="form-control" id="job-location" />
              </div>
              <div class="form-group">
                <input type="submit" class="secondary-button" required value="Save" />
              </div>
            </form>
          </div>
        </div>
        <div class="offset-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import InputTag from "vue-input-tag";
import { VueEditor } from "vue2-editor";
import JobsService from "@/services/JobsService";
export default {
  name: "CreateJob",
  components: {
    InputTag,
    VueEditor
  },
  data() {
    return {
      job: {
        title: null,
        type: null,
        level: null,
        description: null,
        target: null,
        email: null,
        companyName: null,
        companyImageUrl: null,
        skills: [],
        currency: null,
        minSalary: null,
        maxSalary: null,
        location: null
      }
    };
  },
  methods: {
    async update() {
      const jobId = this.$route.params.jobId;
      try {
        await JobsService.updateSingleJob(this.job);
        this.$router.push(`/job/${jobId}`);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const jobId = this.$route.params.jobId;
      this.job = (await JobsService.showSingleJob(jobId)).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>