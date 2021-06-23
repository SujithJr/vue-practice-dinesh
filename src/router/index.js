import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomEvents from '../views/CustomEvents.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'custom-events', component: CustomEvents },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
