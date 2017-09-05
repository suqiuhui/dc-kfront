import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vue.Store({
    state: {
        // taskList: []

    },
    mutations: {
        getTaskList (state) {
            // return state.taskList
        },
        setTaskList (state, obj) {
            // state.taskList = obj.data
        }
    },
    actions: {
        getTaskList ({commit}) {
            commit('getTaskList')
        },
        setTaskList ({commit}, obj) {
            commit('setTaskList', obj)
        },

        ajax (context, obj) {
            axios({
                baseURI: 'http://172.16.232.18:8089',
                url: obj.url, //'/mockjsdata/1/getTaskList',
                method: obj.method, //'post',
                data: obj.data //this.user
            })
        }


    },
    getter: {

    },
    setter: {

    },
    modules: {

    }

})