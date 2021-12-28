<template>
  <header class="header">
    <div class="container container-home">
      <nav class="navbar navbar-expand-lg">
        <router-link class="navbar-brand logo" to="/" data-test="logo">
          Job
          <div>
            <span>l</span>
            <i class="far fa-eye"></i>
            <i class="far fa-eye"></i>p
          </div>
        </router-link>
        <button
          id="navbar-toggler-button"
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="d-flex align-items-center">
            <div class="mr-1">
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </div>
            <div class="navbar-toggler-menu">Menu</div>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                exact
                @click.native="closeMenu"
                data-test="home"
              >Home</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
                @click.native="closeMenu"
                data-test="about"
              >About</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
                @click.native="closeMenu"
                data-test="contact"
              >Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link" @click.native="closeMenu" data-test="faq">F&Q</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                to="/jobs"
                class="nav-link"
                @click.native="closeMenu"
                data-test="browse-jobs"
              >Browse Jobs</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link"
                v-if="!isLoggedIn"
                @click.native="closeMenu"
                data-test="login"
              >Login</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/register"
                class="nav-link"
                v-if="!isLoggedIn"
                @click.native="closeMenu"
                data-test="register"
              >Register</router-link>
            </li>
            <li class="nav-item d-flex align-items-center ml-1">
              <router-link
                to="/job/create"
                class="post-job"
                @click.native="closeMenu"
                data-test="create-job"
              >
                <i class="fas fa-plus-circle"></i> Create Job
              </router-link>
            </li>
            <li class="nav-item dropdown" v-if="isLoggedIn">
              <a
                class="nav-link dropdown-toggle d-flex align-items-center"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user-circle avatar-image"></i>
                Profile
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link
                  to="/profile"
                  class="nav-link"
                  @click.native="closeMenu"
                  data-test="profile"
                >Your Account</router-link>
                <div class="dropdown-divider"></div>
                <button
                  class="nav-link nav-link-logout"
                  @click.prevent="logoutUser(); closeMenu();"
                  data-test="logout"
                >
                  <i class="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
      this.$router.push("/login");
    },
    closeMenu() {
      const navbar = document.getElementById("navbarNav");
      const menuButton = document.getElementById("navbar-toggler-button");
      navbar.classList.remove("show");
      menuButton.classList.add("collapsed");
    }
  }
};
</script>

<style>
</style>
