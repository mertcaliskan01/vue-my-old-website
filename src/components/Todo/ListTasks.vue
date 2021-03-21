<template>
  <v-list class="pt-0" flat>
    <task v-for="task in $store.state.tasks" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  task: require("@/components/Todo/Task.vue").default,
};
</script>
