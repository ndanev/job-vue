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
            <li v-for="item in footerUsefulLinks" :key="item.id" class="footer-item">
              <router-link class="footer-link" :to="item.href">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Support</h4>
          <ul class="footer-list">
            <li v-for="item in footerSupportLink" :key="item.id" class="footer-item">
              <router-link class="footer-link" :to="item.href">{{ item.name }}</router-link>
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
        >&copy; {{ currentYear }}, powerd by Nemanja Danev</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      footerUsefulLinks: [
        {
          id: 'home',
          name: 'Home',
          href: '/'
        },
        {
          id: 'about',
          name: 'About',
          href: '/about'
        },
        {
          id: 'post-job',
          name: 'Post a Job',
          href: '/job/create'
        },
        {
          id: 'browse-jobs',
          name: 'Browse Jobs',
          href: '/jobs'
        }
      ],
      footerSupportLink: [
        {
          id: 'contact',
          name: 'Contact',
          href: '/contact'
        },
        {
          id: 'faq',
          name: 'F&Q',
          href: '/faq'
        },
      ]
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    currentYear() {
      let currentYear = new Date().getFullYear();
      return currentYear
    }
  }
};
</script>

<style>
</style>