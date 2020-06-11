<template>
  <section class="d-flex flex-column justify-center align-center" style="" >
    <h2 :class="{'small-h2': getMobile}" style="color: #E53935;">HELLO, I'M</h2>
    <h1 :class="{'small-h1': getMobile}">MILIND VISHNOI</h1>
    <vue-typed-js :strings="listOfThings" :typeSpeed="50" :backSpeed="50" :loop="true" :cursorChar="'_'">
      <h3>A <span class="typing"></span></h3>
    </vue-typed-js>
    <v-btn style="margin: 10px;" class="mx-2" fab color="headings">
      <v-icon>mdi-arrow-down</v-icon>
    </v-btn>
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
        if(this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
          return true;
        }
        return false;
      }
    }
  }
</script>

<style>
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 40px;
  }
  .small-h1 {
    font-size: 40px;
  }
  .small-h2 {
    font-size: 30px;
  }
</style>
