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
                <v-icon large>
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
              <h3>
                Hello, my name is Mert Çalışkan. I am originally from the Turkey and I currently 
                live in İzmir. I graduated from Celal Bayar University as a Computer Engineer.
                I have been a developer since 2019, and specialize in Mobile
                Application Development. Before becoming a Mobile Developer, I worked as a 
                Software Test Engineer. In my free time, I enjoy fishing, cycling, swimming, 
                practicing coding and learning the new technologies.
              </h3>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-img src="../assets/profile-icon-background.jpg" alt="parallax"></v-img>
        </v-col>
      </v-row>
    </div>

    <experiences-section :model="experienceModel" />

    <experiences-section :model="educationModel" />

    <footer-section />
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
    linkedinURL: "https://www.linkedin.com/in/mert-%C3%A7ali%C5%9Fkan-0271bb15b/",
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],

    experienceModel: {
      header: "DENEYİM",
      experiences: [
        {
          title: "deneyim1",
          items: [{ content: "deneyim1" }, { content: "deneyim1" }],
          color: "deep-orange lighten-2",
        },
        {
          title: "deneyim2",
          items: [
            {
              content: "deneyim2",
            },
            {
              content: "deneyim2",
            },
          ],
          color: "deep-orange lighten-2",
        },
        {
          title: "deneyim3",
          items: [{ content: "deneyim3" }, { content: "deneyim3" }],
          color: "deep-orange lighten-2",
        },
      ],
    },
    educationModel: {
      header: "EĞİTİM",
      experiences: [
        {
          title: "eğitim1",
          items: [{ content: "eğitim1" }, { content: "eğitim1" }],
          color: "deep-orange lighten-1",
        },
        {
          title: "eğitim2",
          items: [
            {
              content: "eğitim2",
            },
            {
              content: "eğitim2",
            },
          ],
          color: "deep-orange lighten-1",
        },
        {
          title: "eğitim3",
          items: [{ content: "eğitim3" }, { content: "eğitim3" }],
          color: "deep-orange lighten-1",
        },
      ],
    },
  }),
  components: {
    "footer-section": require("../components/Footers/Footer.vue").default,
    "experiences-section": require("../components/Experiences/Experiences.vue")
      .default,
  },
};
</script>