<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" sm="12" md="6" class="d-flex justify-center">
      <img :height="imageSize" :width="imageSize" src="../assets/img/aboutMe.png" />
    </v-col>
    <v-col cols="12" sm="8" md="6" class="d-flex justify-center">
      <span>
        <h3>Hi I am Milind Vishnoi.</h3>
        <h3 class="mt-5">Growing up, solving problems always enthused me; whether it was creating a strategic plan to win an important game in Squash, or to avoid having to forcefully drink milk at home. Due to my interest in creating a solution to a problem, I am currently pursuing Computer Science and Mathematics at University of Toronto.</h3>
        <h3 class="mt-5">As a Computer Science major, I provide pitches on effective ways of coding. My technical background helps me explain complex coding problems in simpler terms to help other “tech heads” through my technical expertise.</h3>
        <h3 class="mt-5">The purpose of this website is to provide an overview of who I am and what I have done. Please feel free to explore and make any suggestions you have.</h3>
        <h3 class="mt-5">Hopefully, you like my work.</h3>
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    imageSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "300px";
      }
      return "550px";
    }
  }
};
</script>

<style scoped>
</style>