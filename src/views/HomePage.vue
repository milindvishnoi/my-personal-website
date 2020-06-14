<template>
  <section class="d-flex flex-column justify-center align-center" style="height:100%">
    <div class="d-flex align-center">
      <div class="d-flex flex-column justify-center align-center">
      <h2 :class="{'small-h2': getMobile}" style="color: #E53935;">HELLO, I'M</h2>
      <div class="d-flex justify-around align-center justify-center">
        <img v-if="!getMobile" width="130px" style="margin-right: 20px;" src="../assets/img/dp.png" />
        <h1 :class="{'small-h1': getMobile, 'med-h1': this.$vuetify.breakpoint.sm}">MILIND VISHNOI</h1>
      </div>
      <vue-typed-js :strings="listOfThings" :typeSpeed="50" :backSpeed="50" :loop="true" :cursorChar="'_'">
        <h3>A <span class="typing"></span></h3>
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
    name: 'HomePage',
    data() {
      return{
        listOfThings: [
          'Software Developer.',
          // 'Blogger.',
          'Memer.',
          'Computer Science Student.',
          'Mathematics Enthusiast.'
        ]
      }
    },
    computed: {
      getMobile() {
        if( this.$vuetify.breakpoint.xs ) {
          return true;
        }
        return false;
      }
    }
  }
</script>

<style>
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
    font-size: 40px;
  }
  .small-h2 {
    font-size: 30px;
  }
</style>
