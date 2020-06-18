<template>
  <section class="d-flex flex-column justify-center align-center hero-full-height">
    <div class="d-flex justify-center align-center">
      <div class="d-flex flex-column justify-center align-center">
        <h2 :class="{'small-h2': this.$vuetify.breakpoint.xs}" style="color: #E53935;">HELLO, I'M</h2>
        <div class="d-flex justify-around align-center justify-center">
          <img :width="imageWidth" class="mr-5" src="../assets/img/dp.png" />
          <h1 :class="{'small-h1': this.$vuetify.breakpoint.xs, 'med-h1': this.$vuetify.breakpoint.sm}">MILIND VISHNOI</h1>
        </div>
        <vue-typed-js
          :strings="listOfThings"
          :typeSpeed="50"
          :backSpeed="50"
          :loop="true"
          :cursorChar="'_'"
        >
          <h3>
            A
            <span class="typing"></span>
          </h3>
        </vue-typed-js>
        <v-btn style="margin: 10px;" class="mx-2" fab color="headings">
          <v-icon>mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      listOfThings: [
        "Software Developer.",
        // 'Blogger.',
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

<style>
.hero-full-height {
  height: 85vh;
}
h1 {
  font-size: 80px;
}
h2 {
  font-size: 40px;
}
.med-h1 {
  font-size: 60px;
}
.small-h1 {
  font-size: 34px;
}
.small-h2 {
  font-size: 30px;
}
</style>
