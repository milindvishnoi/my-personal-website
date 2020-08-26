<template>
  <div>
    <v-bottom-navigation class="d-md-none" fixed background-color="headings" color="white">
      <v-btn icon style="margin: 2px;" href="https://github.com/milindvishnoi">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-btn icon style="margin: 2px;" href="https://www.linkedin.com/in/milindvishnoi/">
        <v-icon x-large>mdi-linkedin</v-icon>
      </v-btn>
      <!-- Disabled Light Mode -->
      <v-btn
        v-if="$vuetify.theme.dark"
        @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        icon
        color="nav"
      >
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn v-else @click="$vuetify.theme.dark = ! $vuetify.theme.dark" icon color="nav">
        <v-icon x-large>mdi-weather-night</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>