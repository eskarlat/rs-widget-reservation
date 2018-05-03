import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './routes'

//css
import 'babel-polyfill'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({ routes })

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')