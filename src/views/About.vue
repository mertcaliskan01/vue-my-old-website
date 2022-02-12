<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%">

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
              :key="message.title"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.title }}</strong>
                </div>
                  <v-list-item v-for="item in message.items" :key="item.content">
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
    data: () => ({
      messages: [
        {
          title: 'Prerequisites',
          items: [
            { content: "Node Modules"},
            { content: "Vue.js"},
          ],
          color: 'deep-purple lighten-1',
        },
        {
          title: 'Project Setup',
          items: [
            { content: "First step, we need to clone backend api repo to your local machine."},
            { content: "git clone https://github.com/mertcaliskan01/vuetify-todo.git"},
          ],
          color: 'red lighten-1',
        },
        {
          title: 'Run Project',
          items: [
            { content: "vue ui"},
            { content: "Tasks -> Serve -> Run task"},
          ],
          color: 'blue lighten-2',
        },
        {
          title: 'Tech',
          items: [
            { content: "vue: 2.6.11"},
            { content: "axios: 0.21.1"},
            { content: "vuex: 3.4.0"},
            { content: "vuetify: 2.6.3"},
            { content: "vue-router: 3.2.0"},
            { content: "express: 4.17.1"},
          ],
          color: 'green lighten-1',
        },
      ],
    }),
  }
</script>