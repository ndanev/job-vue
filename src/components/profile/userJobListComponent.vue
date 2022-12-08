<template>
  <table v-if="currentUser && currentUser.jobs && currentUser.jobs.length > 0" class="table mt-3">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Company Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Edit Job</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="job in currentUser.jobs" :key="job._id">
        <td>{{ job.jobTitle }}</td>
        <td>
          <a :href="job.applicationTarget" target="_blank">{{ job.companyName }}</a>
        </td>
        <td>{{ job.emailAddress }}</td>
        <td>
          <router-link :to="{ name: 'editJob', params: { jobId: job._id }}">Edit</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "userJobListComponent",
  props: ["currentUser"]
};
</script>