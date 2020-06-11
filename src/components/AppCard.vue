<template>
    <v-card outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-subtitle style="color:white;" class="overline mb-4">{{ desc }}</v-list-item-subtitle>
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
    <v-card-text :class="{'second-sentence': isdescriptionTwo}" style="color:white;">{{ descriptionOne }}</v-card-text>
    <v-card-text v-if="isdescriptionTwo" style="color:white;padding-top:0px;">{{ descriptionTwo }}</v-card-text>
    <!-- <v-card-actions> -->
    <!-- These are to display the github and web buttons at the bottom -->
      <!-- <v-btn icon large :href="github">
          <v-icon large>mdi-github</v-icon>
      </v-btn>
      <v-btn v-if="web" :href="website" icon large>
          <v-icon large>mdi-web</v-icon>
      </v-btn> -->
    <!-- </v-card-actions> -->
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
            github: String,
        },
        computed: {
            web(){
                return this.website > ''
            },
            isdescriptionTwo(){
                return this.descriptionTwo > ''
            }
        }
    }
</script>

<style scoped>
    .second-sentence{
        padding-bottom:0px;
    }
</style>