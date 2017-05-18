import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    dataArticles: [],
    users: []
  },
  getters: {
    dataArticles(state) {
      return state.dataArticles
    },
    isLogin(state) {
      return window.localStorage.getItem('token')
    }
  },
  mutations: {
    dataArticles(state, data) {
      state.dataArticles = data
    },
    signin(state, data) {
      console.log('user_id di mutation store: ' + data.id);
      console.log(data);
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('user', data.username)
      window.localStorage.setItem('id', data.id)
      state.users.push(data)
      window.location = "/"
    },
    signup(state, data) {
      state.users.push(data)
    },
    addArticle(state, data) {
      state.dataArticles.push(data)
    },
    editArticle(state, data) {
      // const index = state.dataArticles.findIndex((p) => p.id === data._id);
      // if (index !== -1) {
      //   state.dataArticles.splice(index, 1, data)
      // }
      state.dataArticles = data
      window.location = "/"
    },
    deleteArticle(state, data) {
      state.dataArticles = data
      window.location = "/"
    }
  },
  actions: {
    dataArticles({
      commit
    }) {
      Vue.axios.get(`http://localhost:3000/api/articles`)
        .then(response => {
          console.log('Get all data articles');
          console.log(response);
          commit('dataArticles', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    newArticles({
      commit
    }, data) {
      Vue.axios.post(`http://localhost:3000/api/articles`, {
          title: data.title,
          content: data.content
        }, {
          headers: {
            'token': window.localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log('Ini response data waktu create new articles');
          console.log(response);
          commit('addArticle', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    editArticle({
      commit
    }, data) {
      console.log('Ini data edit action di file store');
      console.log(data);
      Vue.axios.put(`http://localhost:3000/api/article/${data.id}`, {
          title: data.title,
          content: data.content
        }, {
          headers: {
            'token': window.localStorage.getItem('token')
          }
        })
        .then(response => {
          commit('editArticle', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    deleteArticle({
      commit
    }, data) {
      console.log('Isi data delete action di file store');
      console.log(data);
      if (data.author.username != window.localStorage.getItem('user')) {
        alert('You are not authorized!')
        console.log('You are not authorized!');
      } else {
        let notif = confirm("Are you sure want to delete this item?")
        if (notif) {
          Vue.axios.delete(`http://localhost:3000/api/article/${data._id}`, {
              headers: {
                'token': window.localStorage.getItem('token')
              }
            })
            .then(response => {
              commit('deleteArticle', response.data)
            })
            .catch(error => {
              console.log(error);
            })
        }
      }
    },
    signIn({
      commit
    }, data) {
      Vue.axios.post(`http://localhost:3000/api/signin`, {
          username: data.username,
          password: data.password
        })
        .then(response => {
          console.log('Login action di store');
          console.log(response);
          commit('signin', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    signUp({
      commit
    }, data) {
      Vue.axios.post(`http://localhost:3000/api/signup`, {
          name: data.name,
          username: data.username,
          password: data.password,
          email: data.email
        })
        .then(response => {
          commit('signup', response.data)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
})