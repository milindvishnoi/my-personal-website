<template>
  <div>
    <!-- For Mobiles -->
    <v-app-bar elevate-on-scroll app fixed color="background" dense flat min-height="52px">
      <v-spacer />
      <v-app-bar-nav-icon @click="clicked = !clicked" x-large color="nav"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Divider (for mobiles) -->
    <v-navigation-drawer disable-resize-watcher app v-model="clicked" right>
      <v-list dense nav>
        <v-list-item two-line class="px-0">
          <v-list-item-content class="mx-2">
            <v-list-item-title style="color:#E53935;font-size:15px;">I'M MILIND VISHNOI</v-list-item-title>
            <vue-typed-js
              :strings="describeMeArray"
              :typeSpeed="50"
              :backSpeed="50"
              :loop="true"
              :cursorChar="'_'"
            >
              <v-list-item-subtitle>
                A
                <span class="typing"></span>
              </v-list-item-subtitle>
            </vue-typed-js>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-3"></v-divider>
        <span v-for="item in items" :key="item.title">
          <v-list-item link @click="navMethods(item.call)">
            <v-list-item-icon>
              <v-icon large>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title large>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { describeMeArray } from "../data";

export default {
  data() {
    return {
      overlay: false,
      clicked: false,
      items: [
        { title: "Home", icon: "mdi-home", call: "home" },
        {
          title: "Who Am I?",
          icon: "mdi-account",
          call: "aboutme"
        },
        {
          title: "Projects",
          icon: "mdi-xml",
          call: "projects"
        }
        // {
        //   title: "Contact Me",
        //   icon: "mdi-gmail",
        //   call: "contactme"
        // }
      ],
      describeMeArray
    };
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

<style lang="scss" scoped>
</style>