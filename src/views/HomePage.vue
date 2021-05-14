<template>
  <div class="d-flex flex-column justify-center align-center hero-full-height" :class="{'mobile-full-height': this.$vuetify.breakpoint.xs}">
    <v-spacer />
    <div class="d-flex justify-center align-center">
      <div class="d-flex flex-column justify-center align-center">
        <h2 class="app-headings">HELLO, I'M</h2>
        <div class="d-flex justify-around align-center justify-center">
          <h1 class="ml-4 app-title">MILIND VISHNOI</h1>
        </div>
        <vue-typed-js
          :strings="describeMeArray"
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
        <div class="d-flex flex-column justify-center bounce red-color mb-10" @click="$vuetify.goTo('#aboutme')">
          More
          <v-icon class="red-color">mdi-arrow-down</v-icon>
        </div>
      </div>
    </div>
    <v-spacer />
  </div>
</template>

<script>
import { describeMeArray } from "../data.js";

export default {
  name: "HomePage",
  data() {
    return {
      describeMeArray
    }
}};
</script>

<style scoped>
.bounce {
  margin-top: 60px;
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
  font-size: 128px;
}
.app-headings {
  background: none;
  font-size: 48px;
  color: #D90429;
}
.red-color {
  color: #D90429;
}
.app-sub-headings {
  font-size: 20px;
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
.mobile-full-height {
  max-height: 90vh;
}
</style>
