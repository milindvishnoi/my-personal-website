<template>
  <div>
    <v-card fixed color="grey lighten-4" flat tile>
      <!-- For Mobiles -->
      <v-toolbar
        class="d-md-none"
        :color="getDarkMode ? '#121212' : 'primary'"
        dense
        flat
        min-height="52px"
      >
        <v-app-bar-nav-icon @click="clicked = !clicked" x-large color="headings"></v-app-bar-nav-icon>
        <v-spacer />
        <v-btn text x-large color="headings">
          <v-icon x-large>mdi-home</v-icon>
        </v-btn>
        <v-spacer />
        <!-- Disabled Light Mode -->
        <v-btn
          v-if="getDarkMode"
          @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
          icon
          color="headings"
          style="margin: 2px;"
        >
          <v-icon x-large>mdi-weather-sunny</v-icon>
        </v-btn>
        <v-btn
          v-else
          @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
          icon
          color="headings"
          style="margin: 2px;"
        >
          <v-icon x-large>mdi-weather-night</v-icon>
        </v-btn>
      </v-toolbar>

      <!-- Divider (for mobiles) -->
      <v-navigation-drawer app v-model="clicked" class="d-md-none">
        <v-list dense nav>
          <v-list-item two-line class="px-0">
            <v-list-item-avatar>
              <img src="../assets/img/dp.png" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title style="color:#E53935;font-size:15px;">I'M MILIND VISHNOI</v-list-item-title>
              <vue-typed-js
                :strings="listOfThings"
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

          <v-divider></v-divider>
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

      <!-- For Laptops   -->
      <v-toolbar
        class="hidden-sm-and-down"
        :color="getDarkMode ? '#121212' : 'primary'"
        dense
        flat
        min-height="52px"
      >
        <v-btn x-large text color="headings" @click="$vuetify.goTo('#home')">Home</v-btn>

        <v-btn x-large text color="headings" @click="$vuetify.goTo('#aboutme')">Who Am I?</v-btn>

        <v-btn x-large text color="headings" @click="$vuetify.goTo('#projects')">Projects</v-btn>

        <!-- For now not displaying experience -->
        <!-- <v-btn x-large text color="headings">
          Experience
        </v-btn>-->

        <v-btn x-large text color="headings" @click="$vuetify.goTo('#contactme')">Contact Me</v-btn>
        <v-spacer />
        <v-btn
          icon
          color="headings"
          style="margin: 2px;"
          href="https://www.instagram.com/confessions.of.a.coding.freak/"
        >
          <v-icon x-large>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon color="headings" style="margin: 2px;" href="https://github.com/milindvishnoi">
          <v-icon x-large>mdi-github</v-icon>
        </v-btn>
        <v-btn
          icon
          color="headings"
          style="margin: 2px;"
          href="https://www.linkedin.com/in/milindvishnoi/"
        >
          <v-icon x-large>mdi-linkedin</v-icon>
        </v-btn>
        <!-- Disabled Light Mode -->
        <v-btn
          v-if="getDarkMode"
          @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
          icon
          color="headings"
          style="margin: 2px;"
        >
          <v-icon x-large>mdi-weather-sunny</v-icon>
        </v-btn>
        <v-btn
          v-else
          @click="$vuetify.theme.dark = ! $vuetify.theme.dark"
          icon
          color="headings"
          style="margin: 2px;"
        >
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
        },
        {
          title: "Contact Me",
          icon: "mdi-gmail",
          call: "contactme"
        }
      ],
      listOfThings: [
        "Software Developer.",
        "Memer.",
        "Computer Science Student.",
        "Mathematics Enthusiast."
      ]
    };
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
  methods: {
    navMethods(call) {
      switch (call) {
        case "home":
          this.$vuetify.goTo("#home");
          break;
        case "aboutme":
          this.$vuetify.goTo('#aboutme');
          break;
        case "projects":
          this.$vuetify.goTo('#projects');
          break;
        case "contactme":
          this.$vuetify.goTo('#contactme')
          break;
      }
      return 0;
    }
  }
};
</script>

<style scoped>
text-color {
  color: secondary;
}
</style>