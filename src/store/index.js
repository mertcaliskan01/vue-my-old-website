import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const resource_uri = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
    ],
    snackbar:{
      show: false,
      text: ''
    }
  },
  mutations: {
    async fetchTasks(state){
      await axios.get(resource_uri)
        .then(res => state.tasks = res.data)
        .catch(err => console.log(err));
    },
    async addTask(state, newTask) {
      const {id, title, completed} = newTask;
      await axios.post(resource_uri, {
        id,
        title,
        completed
      })
          //.then(res => state.tasks = [...state.tasks, res.data])
          //.then(res => state.tasks.push(res.data))
          .then(res => state.tasks.push(newTask))// api always returns the same id
          .catch(err => console.log(err));
    },
    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0]
      task.completed = !task.completed;
    },
    deleteTask(state,id) {
      axios.delete(`/todos/${id}`)
          .then(res => state.tasks = state.tasks.filter((task) => task.id !== id))
          .catch(err => console.log(err));
    },
    async updateTaskTitle(state, payload){
      const {id, title, completed} = payload;
      await axios.patch(`/todos/${id}`, {
        title,
        completed
      })
      .then(function(res) {
        let task = state.tasks.filter(task => task.id === payload.id)[0]
        task.title = payload.title;
      })
      .catch(err => console.log(err));
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id)
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
      })
    },
    showSnackbar(state, text){
      let timeout = 0
      if(state.snackbar.show){
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeout);
    },
    hideSnackbar(state){
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({commit}, newTask){
      commit('addTask', newTask)
      commit('showSnackbar','Task added!')
    },
    deleteTask({commit}, id){
      commit('deleteTask', id)
      commit('showSnackbar','Task deleted!')
    }
  },
  getters: {
  }
})
 