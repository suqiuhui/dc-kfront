import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Router from './router/router'
import Store from './store/store'
import App from './app.vue'

Vue.config.productionTip = false
// 设置为 false 以阻止 vue 在启动时生成生产提示

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router: Router,
    store: Store,
    template: `<App/>`,
    components: { App }
})