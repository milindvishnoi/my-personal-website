<template>
  <div>
    <v-bottom-navigation v-if="getMobile" fixed background-color="headings" color="white">
        <v-btn icon style="margin: 2px;" href="https://www.instagram.com/confessions.of.a.coding.freak/">
            <v-icon x-large>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon style="margin: 2px;" href="https://github.com/milindvishnoi">
            <v-icon x-large>mdi-github</v-icon>
        </v-btn>
        <v-btn icon style="margin: 2px;" href="https://www.linkedin.com/in/milindvishnoi/">
            <v-icon x-large>mdi-linkedin</v-icon>
        </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
    export default {
        computed: {
            getMobile() {
                if(this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs) {
                    return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>

</style>