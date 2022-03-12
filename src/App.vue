<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <div class="pa-4 grey lighten-4" height="200" align="center" >
        <v-avatar size="180" >
          <img src="./assets/image.jpeg" alt="Profile Photo" />
        </v-avatar>

        <div class="text-subtitle-1 font-weight-bold " >
          MERT ÇALIŞKAN
        </div>
        <div class="font-weight-bold">Computer Engineer</div>
      </div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle> Menu </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      height="100"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title v-if="!drawer">MERT ÇALIŞKAN</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon Large>mdi-download</v-icon>
        CV
      </v-btn>

      <v-btn icon>
        <v-icon Large>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
      //{ title: "Todo", icon: "mdi-check-circle", to: "/todo" },
    ],
  }),
  components: {
    snackbar: require("@/components/Shared/Snackbar.vue").default,
  },
};
</script>
            
