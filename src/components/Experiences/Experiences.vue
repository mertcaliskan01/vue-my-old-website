<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%">

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            {{model.header}}
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="experience in model.experiences"
              :key="experience.title"
              :color="experience.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ experience.title }}</strong>
                </div>
                  <v-list-item v-for="item in experience.items" :key="item.content">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.content }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
  export default {
        props: ["model"],
    data: () => ({
    }),
  }
</script>