import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomEvents from '../views/CustomEvents.vue'
import Emitt from '../views/ParentCom.vue'
import SlotEvent from '../views/SlotEvents.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'custom-events', component: CustomEvents },
    { path: '/slot', name: 'slot-events', component: SlotEvent },
    { path: '/emitt', name: 'custom-emitt', component: Emitt },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
