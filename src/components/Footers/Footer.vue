<template>
  <v-footer padless>
    <v-row no-gutters justify="space-around">
      <v-btn v-for="link in links" :key="link" text rounded class="my-5">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-subtitle>
              <v-list-item class="text-h6">
                {{ link.title }}
              </v-list-item>
              <v-btn
                icon
                v-if="link.showIcon"
                :href="linkedinURL"
                target="_blank"
              >
                <v-icon>
                  {{ link.icon }}
                </v-icon>
              </v-btn>
              <v-list-item v-else>
                {{ link.content }}
              </v-list-item>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-btn>
      <v-col class="py-4 text-center" cols="12">
        {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
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
  }),
};
</script>