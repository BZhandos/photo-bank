import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleImage from './views/SingleImage'
import Result from './views/Result'
import Planets from './views/Planets'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/image/:id',
      component: SingleImage
    },
    {
      path: '/result/',
      component: Result
    },
    {
      path: '/result/:query',
      component: Result
    },
    {
      path: '/planets',
      component: Planets
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/art-board',
      name: 'art-board',
      component: () => import('./components/samples/AdCombo/ArtBoard.vue')
    },
    {
      path: '/vuex-vuelidate',
      name: 'vuex-vuelidate',
      component: () => import('./views/VuexVuelidate.vue')
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: () => import('./components/tourism/Tourism.vue')
    }
  ]
})
