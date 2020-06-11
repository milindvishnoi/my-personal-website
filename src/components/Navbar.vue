<template>
  <div>
    <v-card
    fixed
    color="grey lighten-4"
    flat
    tile
    >
    <!-- For Mobiles -->
    <v-toolbar class="d-md-none" :color="getDarkMode ? 'none' : 'primary'" dense min-height="52px">
      <v-btn icon color="headings">
        <v-icon x-large>mdi-apps</v-icon>
      </v-btn>
      <v-spacer />
        <v-btn text x-large color="headings">
          <v-icon x-large>mdi-home</v-icon>
        </v-btn>
      <v-spacer />
      <!-- Disabled Light Mode -->
      <v-btn v-if="getDarkMode" @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="headings" style="margin: 2px;">
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn v-else @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="headings" style="margin: 2px;">
        <v-icon x-large>mdi-weather-night</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- For Laptops   -->
    <v-toolbar class="hidden-sm-and-down" :color="getDarkMode ? 'none' : 'primary'" dense min-height="52px">
        <v-btn x-large text color="headings">
          Home
        </v-btn>

        <v-btn x-large text color="headings">
          About Me
        </v-btn>

        <v-btn x-large text color="headings">
          Projects
        </v-btn>

        <!-- For now not displaying experience -->
        <!-- <v-btn x-large text color="headings">
          Experience
        </v-btn> -->

        <v-btn x-large text color="headings">
          Contact Me
        </v-btn>
      <v-spacer />
      <v-btn icon color="headings" style="margin: 2px;" href="https://www.instagram.com/confessions.of.a.coding.freak/">
        <v-icon x-large>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon color="headings" style="margin: 2px;" href="https://github.com/milindvishnoi">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-btn icon color="headings" style="margin: 2px;" href="https://www.linkedin.com/in/milindvishnoi/">
        <v-icon x-large>mdi-linkedin</v-icon>
      </v-btn>
      <!-- Disabled Light Mode -->
      <v-btn v-if="getDarkMode" @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="headings" style="margin: 2px;">
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn v-else @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="headings" style="margin: 2px;">
        <v-icon x-large>mdi-weather-night</v-icon>
      </v-btn>
    </v-toolbar>
    </v-card>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          overlay: false
        }
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
    }
</script>

<style scoped>
text-color {
  color: secondary;
}
</style>