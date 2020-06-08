<template>
  <div>
    <v-card
    color="grey lighten-4"
    flat
    tile
    >
    <!-- For Mobiles -->
    <!-- For Laptops   -->
    <v-toolbar :color="getDarkMode ? 'none' : 'primary'" dense min-height="52px">
        <v-btn x-large text color="headings">
          Home
        </v-btn>

        <v-btn x-large text color="headings">
          About Me
        </v-btn>

        <v-btn x-large text color="headings">
          Projects
        </v-btn>

        <v-btn x-large text color="headings">

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
      <!-- <v-btn v-if="getDarkMode" @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="headings" style="margin: 2px;">
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn v-else @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="headings" style="margin: 2px;">
        <v-icon x-large>mdi-weather-night</v-icon>
      </v-btn> -->
    </v-toolbar>
    </v-card>
  </div>
</template>

<script>
    export default {
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