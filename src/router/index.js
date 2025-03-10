import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ComingSoonView from '../views/ComingSoonView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'coming-soon',
    component: ComingSoonView
  },
  {
    path: '*',
    redirect: '/'
  }
  // Original routes are commented out
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/scorecard',
  //   name: 'scorecard',
  //   component: () => import('../views/ScorecardView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
