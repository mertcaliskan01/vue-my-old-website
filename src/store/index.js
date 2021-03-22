import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const resource_uri = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[

    ]
  },
  mutations: {
    async fetchTasks(state){
      const response = await axios.get(resource_uri);
      state.tasks = response.data
    },
    addTask(state, newTaskTitle){
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
      }
      state.tasks.push(newTask)
    },
    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0]
      task.completed = !task.completed;
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id != id)
    },
    updateTaskTitle(state, payload){
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title;
    }
  },
  actions: {
  },
  getters: {
  }
})
 