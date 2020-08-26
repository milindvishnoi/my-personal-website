<template>
  <div>
    <!-- For Laptops   -->
    <v-app-bar
      app
      fixed
      class="hidden-sm-and-down"
      color="background"
      dense
      flat
      min-height="52px"
      min-width="100%"
    >
      <v-btn x-large text color="nav" @click="$vuetify.goTo('#home')">Home</v-btn>

      <v-btn x-large text color="nav" @click="$vuetify.goTo('#aboutme')">Who Am I?</v-btn>

      <v-btn x-large text color="nav" @click="$vuetify.goTo('#projects')">Projects</v-btn>

      <!-- <v-btn x-large text color="nav" @click="$vuetify.goTo('#contactme')">Contact Me</v-btn> -->
      <v-spacer />
      <v-btn icon color="nav" style="margin: 2px;" href="https://github.com/milindvishnoi">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        color="nav"
        class="mx-0.5"
        href="https://www.linkedin.com/in/milindvishnoi/"
      >
        <v-icon x-large>mdi-linkedin</v-icon>
      </v-btn>
      <!-- Disabled Light Mode -->
      <v-btn
        v-if="$vuetify.theme.dark"
        @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        icon
        color="nav"
        class="mx-0.5"
      >
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-btn
        v-else
        @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
        icon
        color="nav"
        class="mx-0.5s"
      >
        <v-icon x-large>mdi-weather-night</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>