<template>
  <v-card outlined :color="getDarkMode ? '' : 'primary'">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle
          :color="getDarkMode ? 'white' : 'black'"
          class="overline mb-4"
        >{{ desc }}</v-list-item-subtitle>
        <v-list-item-title class="headline mb-1" style="color:red;">{{ projectName }}</v-list-item-title>
      </v-list-item-content>
      <v-card-actions>
        <v-btn v-if="web" :href="website" icon large>
          <v-icon large>mdi-web</v-icon>
        </v-btn>
        <v-btn icon large :href="github">
          <v-icon large>fab fa-github-alt</v-icon>
        </v-btn>
      </v-card-actions>
    </v-list-item>
    <v-card-text
      :color="getDarkMode ? 'white' : 'black'"
      :class="{'second-sentence': isdescriptionTwo}"
    >{{ descriptionOne }}</v-card-text>
    <v-card-text
      :color="getDarkMode ? 'white' : 'black'"
      v-if="isdescriptionTwo"
      class="pt-0"
    >{{ descriptionTwo }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    desc: String,
    projectName: String,
    descriptionOne: String,
    descriptionTwo: String,
    website: String,
    github: String
  },
  computed: {
    web() {
      return this.website > "";
    },
    isdescriptionTwo() {
      return this.descriptionTwo > "";
    },
    getDarkMode() {
      return this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
.second-sentence {
  padding-bottom: 0px;
}
</style>