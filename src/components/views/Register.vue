<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="offset-md-3"></div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h1 class="d-flex justify-content-center align-items-center">Register Account</h1>
            </div>
            <div class="card-body">
              <form @submit.prevent="registerUser">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Name*</label>
                      <input
                        v-model="name"
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        id="name"
                        autocomplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="username">Username*</label>
                      <input
                        v-model="username"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        id="username"
                        autocomplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email*</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    id="email"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password*</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    id="password"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="confirm_password">Confirm Password*</label>
                  <input
                    v-model="confirm_password"
                    type="password"
                    class="form-control"
                    :class="[errorMessage ? 'border-danger' : '']"
                    placeholder="Confirm Password"
                    id="confirm_password"
                    autocomplete="off"
                    required
                  />
                  <small v-if="errorMessage" class="text-danger">{{ errorMessage }}</small>
                </div>
                <div class="form-group">
                  <input type="submit" value="Register" class="secondary-button w-100" />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <router-link to="/login" class="card-link">You have an account?</router-link>
            </div>
          </div>
        </div>
        <div class="offset-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password
      };
      if (user.password == user.confirm_password) {
        this.register(user).then(res => {
          if (res.data.success) {
            this.$router.push("login");
          }
        });
      } else {
        this.errorMessage = 'Passwords are not matched.'
      }

    }
  }
};
</script>