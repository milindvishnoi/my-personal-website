<template>
    <div>
      <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense min-height="52px">
        <v-btn x-large style="margin: 2px;" text color="secondary">
          Home
        </v-btn>

        <v-btn x-large style="margin: 2px;"  text color="secondary">
          About Me
        </v-btn>

        <v-btn x-large style="margin: 2px;"  text color="secondary">
          Projects
        </v-btn>
      <v-spacer />
      <v-btn icon color="secondary" style="margin: 2px;" href="https://www.instagram.com/confessions.of.a.coding.freak/">
        <v-icon x-large>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon color="secondary" style="margin: 2px;" href="https://github.com/milindvishnoi">
        <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-btn icon color="secondary" style="margin: 2px;">
        <v-icon x-large>mdi-weather-sunny</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
text-color {
  color: secondary;
}
</style>