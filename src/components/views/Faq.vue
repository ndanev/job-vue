<template>
  <section class="section section-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="custom-icon">
            <i class="fas fa-question-circle"></i>
          </div>
          <h1 class="hero-title mb-3">Faq</h1>
          <h3 class="section-subtitle">Want to know more?</h3>
          <p class="section-lead">Learn how to make the most of our site.</p>
        </div>
        <div class="col-md-8">
          <div class="accordion" id="accordion" v-for="faq in faqs" :key="faq.id">
            <div class="card">
              <div class="card-header-faq" :id="'heading'+faq.id">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    :data-target="'#collapse'+faq.id"
                    aria-expanded="true"
                    :aria-controls="'collapse'+faq.id"
                  >
                    {{faq.question}}
                    <i class="fas fa-angle-down"></i>
                  </button>
                </h2>
              </div>

              <div
                :id="'collapse'+faq.id"
                class="collapse"
                :aria-labelledby="'heading'+faq.id"
                data-parent="#accordion"
              >
                <div class="card-body">{{faq.answer}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Faq } from "../../faq";
export default {
  name: "Faq",
  components: {},
  data() {
    return {
      faqs: Faq
    };
  }
  // created() {
  //   console.log(Faq);
  // }
};
</script>