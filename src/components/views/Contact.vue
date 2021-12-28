<template>
  <section class="section section-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="custom-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h1 class="hero-title mb-3">Contact</h1>
        </div>
        <div class="col-md-8">
          <h2 class="section-title">Have a question or need any help?</h2>
          <p class="section-lead">We're here for you – just fill out the form and we'll be in touch.</p>
          <form class="contact-form" @submit.prevent="send">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" class="form-control" placeholder="Name" v-model="message.name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" class="form-control" placeholder="Email" v-model="message.email" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message"
                cols="30"
                rows="10"
                class="form-control"
                placeholder="Message"
                v-model="message.textMessage"
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="button secondary-button">Send</button>
            </div>
          </form>
          <loading v-if="loading" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactService from "../../services/ContactService";
import Loading from "../Loading";
export default {
  name: "Contact",
  components: { Loading },
  data() {
    return {
      message: {
        name: null,
        email: null,
        textMessage: null
      },
      loading: false
    };
  },
  methods: {
    async send() {
      console.log("send");
      try {
        // this.loading = true;
        await ContactService.sendMessage(this.message);
        this.message.name = null;
        this.message.email = null;
        this.message.textMessage = null;
        // this.loading = false;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>