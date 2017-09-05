import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'
import Task from '../page/task.vue'
import About from '../page/about.vue'
import Login from '../page/login.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/task',
            name: 'Task',
            component: Task
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router