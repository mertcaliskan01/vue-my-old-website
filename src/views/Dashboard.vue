

<template>
  <v-responsive class="overflow-y-auto" max-height="100%">
    <div class="pa-6 text-center">
      <v-row align="center">
        <v-col cols="12" md="8">
          <v-card flat>
            <v-card-text>
              <v-row class="mb-4" align="center">
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-subtitle
                      v-for="item in PersonalInfo"
                      :key="item.title"
                    >
                      <v-list-item>
                        {{ item.title }}
                      </v-list-item>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

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
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    window: 0,
    selectedItem: 1,
    PersonalInfo: [
      { title: "Dashboard", icon: "mdi-format-list-checks" },
      { title: "About", icon: "mdi-help-box" },
      { title: "Todo", icon: "mdi-check-circle" },
    ],
  }),
};
</script> 