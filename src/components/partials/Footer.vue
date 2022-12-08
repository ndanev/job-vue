<template>
  <footer class="footer">
    <div class="container">
      <div class="row py-3 py-md-5 border-bottom mb-3 mb-md-5" v-if="!isLoggedIn">
        <div class="col-md-4">
          <h1 class="footer-title">
            Are You Ready for
            post a Job?
          </h1>
        </div>
        <div class="col-md-4"></div>
        <div
          class="col-md-4 d-flex align-items-center justify-content-start justify-content-md-end"
        >
          <router-link class="button secondary-button" to="/register">
            Get Started
            <i class="fas fa-long-arrow-alt-right ml-2"></i>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h4>Useful Links</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <router-link class="footer-link" to="/">Home</router-link>
            </li>
            <li class="footer-item">
              <router-link class="footer-link" to="/about">About</router-link>
            </li>
            <li class="footer-item">
              <router-link to="/job/create" class="footer-link">Post a Job</router-link>
            </li>
            <li class="footer-item">
              <router-link to="/jobs" class="footer-link">Browse Jobs</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Support</h4>
          <ul class="footer-list">
            <li class="footer-item">
              <router-link class="footer-link" to="/contact">Contact</router-link>
            </li>
            <li class="footer-item">
              <router-link class="footer-link" to="/faq">F&Q</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <router-link class="navbar-brand logo" to="/">
            Job
            <div>
              <span>l</span>
              <i class="far fa-eye"></i>
              <i class="far fa-eye"></i>p
            </div>
          </router-link>
        </div>
        <div class="col-md-4"></div>
        <div
          class="col-md-4 d-flex align-items-center justify-content-left justify-content-md-end"
        >&copy; {{ new Date().getFullYear() }}, powerd by Nemanja Danev</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

<style>
</style>