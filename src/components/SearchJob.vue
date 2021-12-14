<template>
  <div class="job-search mt-5">
    <div class="container">
      <div class="row">
        <div class="offset-md-1"></div>
        <div class="col-md-10">
          <div>
            <i class="fas fa-search mr-2"></i>
            <b>Filter by</b>
          </div>
          <form>
            <div class="d-flex">
              <input
                v-model="search"
                type="text"
                class="form-control input-search"
                id="search"
                placeholder="Title, location, type, position..."
              />
            </div>
          </form>
        </div>
        <div class="offset-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchJob",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    //value
    search() {
      const route = {
        name: "jobs"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>