import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        activeIndex: '1',
        user: null
    },

    mutations: {
        setActiveIndex (state, obj) {
            state.activeIndex = obj.activeIndex
        },
        setUser (state, obj) {
            state.user = obj
        }
    },
    actions: {
        setActiveIndex ({commit}, obj) {
            commit('setActiveIndex', obj)
        },
        setUser ({commit}, obj) {
            commit('setUser', obj)
        }
    },
    getters: {
        getUser: state => {
            return state.user
        }
    },
    modules: {

    }

})
export default store