import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {id: 0, title: 'Задание №1', text: 'пункт 1й: фыва', text2: 'пункт 2й: додотт', status: false},
      {id: 1, title: 'Задание №2', text: 'пункт 1й: фыва', text2: 'пункт 2й: додотт', text3: 'пункт 3й: додотт', status: false},
      {id: 2, title: 'Задание №3', text: 'пункт 1й: фыва', status: false},
      {id: 3, title: 'Задание №4', text: 'пункт 1й: фыва', text2: 'пункт 2й: додотт', text3: 'пункт 3й: додотт', status: false},
      {id: 4, title: 'Задание №5', text: 'пункт 1й: фыва', text2: 'пункт 2й: додотт', status: false},
      {id: 5, title: 'Задание №6', text: 'пункт 1й: фыва', status: false},
    ],
    modal: {},
    lastPost: {}
  },
  getters: {
    POSTS(state){
      return state.posts;
    },
    MODAL(state){
      return state.modal;
    },
    LAST_POST(state){
      return state.lastPost;
    }
  },
  mutations: {
    ADD_POSTS(state, post){
      state.posts.push(post)
    },
    SET_POSTS(){

    },
    DELETE_POSTS(state, post){
      state.posts = state.posts.filter(p => p.id !== post.id)
    },
    DONE_POST(state, post){
     post.status = !post.status
    },
    SHOW_MODAL(state, post){
     state.modal = post
    },
    RETURN_CURRENT_POST(state, post){
      state.lastPost = post;
    },
    RETURN_POST(state, post){
      console.log(post)
      console.log(state.lastPost)
    }
  },
  actions: {
    ADD({commit}, post){
      commit('ADD_POSTS', post)
    },
    DELETE({commit}, post){
     commit('DELETE_POSTS', post) 
    },
    DONE({commit}, post){
      commit('DONE_POST', post)
    },
    GET_MODAL({commit}, post){
      commit('SHOW_MODAL', post)
    },
    CURRENT_POST({commit}, post){
      commit('RETURN_CURRENT_POST', post)
    },
    SAVED_POST({commit}, post){
      commit('RETURN_POST', post)
    }
  },
  modules: {
  }
})
