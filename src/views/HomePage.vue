<template>
  <section class="d-flex flex-column justify-center align-center hero-full-height" :class="{'full-mobile-height': this.$vuetify.breakpoint.xs}">
    <v-spacer />
    <div class="d-flex justify-center align-center">
      <div class="d-flex flex-column justify-center align-center">
        <h2 class="app-headings">HELLO, I'M</h2>
        <div class="d-flex justify-around align-center justify-center">
          <h1 class="ml-4 app-title">MILIND VISHNOI</h1>
        </div>
        <vue-typed-js
          :strings="listOfThings"
          :typeSpeed="50"
          :backSpeed="50"
          :loop="true"
          :cursorChar="'_'"
        >
          <div class="app-sub-headings headings">
            A
            <span class="typing app-sub-headings headings"></span>
          </div>
        </vue-typed-js>
      </div>
    </div>
    <v-spacer />
    <v-btn small class="bounce" icon fab @click="$vuetify.goTo('#aboutme')">
      <v-icon color="headings">mdi-arrow-down</v-icon>
    </v-btn>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      listOfThings: [
        "Software Developer.",
        "Web Developer.",
        "Memer.",
        "Computer Science Student.",
        "Mathematics Enthusiast."
      ]
    };
  },
  computed: {
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "70px";
        case "sm":
          return "130px";
      }
      return "160px";
    }
  }
};
</script>

<style scoped>
.full-mobile-height {
  min-height: 85vh;
}
.bounce {
  top: -104px;
  -webkit-animation: bounce 0.75s infinite;
}
@-webkit-keyframes bounce {
  25% {
    transform: scale(1, 0.9) translate(0px, 0px);
  }
  75% {
    transform: scale(1, 1) translate(0px, -10px);
  }
}
.app-title {
  font-size: 8vw;
}
.app-headings {
  background: none;
  font-size: 3vw;
  color: #D90429;
}
.app-sub-headings {
  font-size: 1.2vw;
}
/* md size */
@media screen and (max-width: 1000px) {
  .app-title {
    font-size: 10vw;
  }
  .app-headings {
    font-size: 6vw;
  }
  .app-sub-headings {
    font-size: 2vw;
  }
}
/* small size */
@media screen and (max-width: 600px) {
  .app-sub-headings {
    font-size: 3vw;
  }
}
</style>
