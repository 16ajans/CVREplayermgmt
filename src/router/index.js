import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/beatsaber',
    alias: '/',
    component: () => import('../views/BS.vue')
  },
  {
    path: '/beatsaber',
    name: 'Beat Saber',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BS.vue')
  },
  {
    path: '/echoarena',
    name: 'Echo Arena',
    component: () => import('../views/EA.vue')
  },
  {
    path: '/captainscorner',
    name: 'Captain\'s Corner',
    component: () => import('../views/mgmt/CC.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
