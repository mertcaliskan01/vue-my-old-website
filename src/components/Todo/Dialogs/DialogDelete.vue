<template>
  <v-dialog 
  :value="true" 
  persistent
  width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Delete Task?</span>
      </v-card-title>
      <v-card-text>
        Are you sure wanna delete task?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close')">
          No
        </v-btn>
        <v-btn color="red darken-1" text @click="$store.dispatch('deleteTask', task.id)">
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:['task']

};
</script>

<style>
</style>