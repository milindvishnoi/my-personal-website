<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <h1 :class="{'small-h1': getMobile, 'med-h1': this.$vuetify.breakpoint.sm}">Projects</h1>
    </v-col>
    <v-col cols="12" sm="6" md="4" v-for="(p, i) in projects" :key="i">
      <app-card
        :desc="p.desc"
        :projectName="p.projectName"
        :descriptionOne="p.descriptionOne"
        :descriptionTwo="p.descriptionTwo"
        :website="p.website"
        :github="p.github"
        :web="p.web"
      />
    </v-col>
  </v-row>
</template>

<script>
import { projects } from "../data";
import AppCard from "../components/AppCard.vue";

export default {
  computed: {
    getMobile() {
      if (this.$vuetify.breakpoint.xs) {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      projects
    };
  },
  components: {
    AppCard
  }
};
</script>

<style>
</style>