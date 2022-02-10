<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%">

          <v-card-title class="white--text mt-8">
            
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Project
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>
                </div>
                  <v-list-item v-for="item in message.items" :key="item.title">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
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
    data: () => ({
      messages: [
        {
          from: 'Prerequisites',
          items: [
            { title: "Node Modules"},
            { title: "Vue.js"},
          ],
          color: 'deep-purple lighten-1',
        },
        {
          from: 'Project Setup',
          items: [
            { title: "First step, we need to clone backend api repo to your local machine."},
            { title: "git clone https://github.com/mertcaliskan01/vuetify-todo.git"},
          ],
          color: 'red lighten-1',
        },
        {
          from: 'Run Project',
          items: [
            { title: "vue ui"},
            { title: "Tasks -> Serve -> Run task"},
          ],
          color: 'blue lighten-2',
        },
        {
          from: 'Tech',
          items: [
            { title: "vue: 2.6.11"},
            { title: "axios: 0.21.1"},
            { title: "vuex: 3.4.0"},
            { title: "vuetify: 2.6.3"},
            { title: "vue-router: 3.2.0"},
            { title: "express: 4.17.1"},
          ],
          color: 'green lighten-1',
        },
      ],
    }),
  }
</script>