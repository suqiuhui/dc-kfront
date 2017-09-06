import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        activeIndex: '1'
    },

    mutations: {
        getActiveIndex (state) {

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