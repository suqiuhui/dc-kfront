import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home.vue'
import Task from '../page/task.vue'
import Personal from '../page/personal.vue'
import About from '../page/about.vue'
import Login from '../page/login.vue'
import CanvasTest from '../page/canvas-test.vue'

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
            component: Login,
            meta: {requiresAuth: true}
        },
        {
            path: '/task',
            name: 'Task',
            component: Task
        },
        {
            path: '/personal',
            name: 'Personal',
            component: Personal,
            meta: {requiresAuth: true}
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/canvasTest',
            name: 'CanvasTest',
            component: CanvasTest
        }
    ]
})
/*

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!auth.loggedIn()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }//把要跳转的地址作为参数传到下一步
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})
*/

export default router