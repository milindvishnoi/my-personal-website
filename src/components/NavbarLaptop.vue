<template>
  <div>
    <!-- For Laptops   -->
    <v-app-bar app fixed class="hidden-sm-and-down" color="background" dense flat min-height="52px" min-width="100%">
      <v-btn x-large text color="nav" @click="$vuetify.goTo('#home')">Home</v-btn>

      <v-btn x-large text color="nav" @click="$vuetify.goTo('#aboutme')">Who Am I?</v-btn>

      <v-btn x-large text color="nav" @click="$vuetify.goTo('#projects')">Projects</v-btn>

      <!-- For now not displaying experience -->
      <!-- <v-btn x-large text color="nav">
          Experience
      </v-btn>-->

      <v-btn x-large text color="nav" @click="$vuetify.goTo('#contactme')">Contact Me</v-btn>
      <v-spacer />
      <v-btn
        icon
        color="nav"
        style="margin: 2px;"
        href="https://www.instagram.com/confessions.of.a.coding.freak/"
      >
        <v-icon x-large>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon color="nav" style="margin: 2px;" href="https://github.com/milindvishnoi">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        color="nav"
        style="margin: 2px;"
        href="https://www.linkedin.com/in/milindvishnoi/"
      >
        <v-icon x-large>mdi-linkedin</v-icon>
      </v-btn>
      <!-- Disabled Light Mode -->
      <v-btn
        v-if="getDarkMode"
        @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        icon
        color="nav"
        style="margin: 2px;"
      >
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn
        v-else
        @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        icon
        color="nav"
        style="margin: 2px;"
      >
        <v-icon x-large>mdi-weather-night</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false
    };
  },
  computed: {
    getDarkMode: {
      get: function() {
        return this.$vuetify.theme.dark;
      },
      set: function(newValue) {
        this.$vuetify.theme.data = newValue;
      }
    }
  },
  methods: {
    navMethods(call) {
      this.clicked = false;
      switch (call) {
        case "home":
          this.$vuetify.goTo("#home");
          break;
        case "aboutme":
          this.$vuetify.goTo("#aboutme");
          break;
        case "projects":
          this.$vuetify.goTo("#projects");
          break;
        case "contactme":
          this.$vuetify.goTo("#contactme");
          break;
      }
      return 0;
    }
  }
};
</script>

<style scoped>
text-color {
  color: secondary;
}
</style>