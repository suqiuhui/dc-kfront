import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        activeIndex: '1'
    },

    mutations: {
        getActiveIndex (state) {
            // return state.taskList
        },
        setActiveIndex (state, obj) {
            state.activeIndex = obj.activeIndex
        }
    },
    actions: {
        getActiveIndex ({commit}) {
            commit('getActiveIndex')
        },
        setActiveIndex ({commit}, obj) {
            commit('setActiveIndex', obj)
        }
    },
    getter: {

    },
    setter: {

    },
    modules: {

    }

})
export default store