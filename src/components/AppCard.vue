<template>
    <v-card outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle style="color:white;" class="overline mb-4">Multi-Platform Application</v-list-item-subtitle>
        <v-list-item-title class="headline mb-1" style="color:red;">{{ projectName }}</v-list-item-title>
      </v-list-item-content>
      <v-card-actions>
        <v-btn v-if="web" :href="website" icon large>
            <v-icon large>mdi-web</v-icon>
        </v-btn>
        <v-btn icon large :href="github">
            <v-icon large>mdi-github</v-icon>
        </v-btn>
      </v-card-actions>
    </v-list-item>
    <v-card-text style="color:white;padding-bottom:0px;">{{ descriptionOne }}</v-card-text>
    <v-card-text style="color:white;padding-top:0px;">{{ descriptionTwo }}</v-card-text>
    <v-card-actions>
      <!-- <v-btn icon large :href="github">
          <v-icon large>mdi-github</v-icon>
      </v-btn>
      <v-btn v-if="web" :href="website" icon large>
          <v-icon large>mdi-web</v-icon>
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        props: {
            projectName: String,
            descriptionOne: String,
            descriptionTwo: String,
            imgsrc: String,
            website: String,
            github: String,
        },
        computed: {
            web(){
                return this.website > ''
            }
        }
    }
</script>

<style scoped>

</style>