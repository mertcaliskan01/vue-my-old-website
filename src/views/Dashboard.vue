<template>
  <v-responsive class="overflow-y-auto" max-height="100%">
    <div class="pa-6 text-center">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-subtitle v-for="item in PersonalInfo" :key="item">
            <v-list-item class="text-h6">
              {{ item.title }}: {{ item.content }}
              <v-btn
                icon
                v-if="item.showIcon"
                :href="linkedinURL"
                target="_blank"
              >
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </v-list-item>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-row align="center">
        <v-col cols="12" md="8">
          <v-card flat>
            <v-card-text>
              <v-row class="mb-4" align="center">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-row>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-parallax
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            alt="parallax"
          ></v-parallax>
        </v-col>
      </v-row>
    </div>

    <v-responsive height="200vh" class="text-center pa-2">
      <v-responsive min-height="50vh"></v-responsive>
      <div class="text-center text-body-2 mb-12">
        The card will appear below:
      </div>

      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-card class="mx-auto" max-width="336">
          <v-card-title>Card title</v-card-title>

          <v-card-text>
            Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque
            laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.
            Aliquam lobortis. Quisque libero metus, condimentum nec, tempor a,
            commodo mollis, magna. In turpis. In dui magna, posuere eget,
            vestibulum et, tempor auctor, justo. In turpis. Pellentesque dapibus
            hendrerit tortor. Ut varius tincidunt libero.
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive>

      <footer-section/>

  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    PersonalInfo: [
      {
        title: "Telefon",
        content: "(+90) 507 713 86 70",
        showIcon: false,
        icon: "",
      },
      {
        title: "E-Posta",
        content: "mcaliskanmert@gmail.com",
        showIcon: false,
        icon: "",
      },
      {
        title: "Linkedin",
        content: "",
        showIcon: true,
        icon: "mdi-linkedin",
      },
    ],
    linkedinURL: "https://www.linkedin.com",
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
  components: {
    "footer-section": require("../components/Footers/Footer.vue").default
  },
};
</script>