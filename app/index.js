import api from './api'
import app from './app.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import VueEvents from 'vue-events'
import VueFeathers from 'vue-feathers-services'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'

// Install vue plugins.
Vue.use(Vuex)
Vue.use(VueEvents)
Vue.use(VueRouter)
Vue.use(VueFeathers, api)

// Create store & router.
const Store = new Vuex.Store(store)
const Router = new VueRouter(router)

// Sync store & router.
sync(Store, Router)

// Install global components.
require('./components')

// Create root Vue instance.
new Vue({
    el: '#app',
    render: h => h(app),
    router: Router,
    store: Store
})
