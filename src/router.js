import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/PhotoBank/Home.vue'
import SingleImage from './views/PhotoBank/pages/imageInfo/SingleImage'
import Search from './views/PhotoBank/Result'
import Planets from './views/Samples/Planets'

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
      component: () => import(/* webpackChunkName: "about" */ './views/CV/About.vue')
    },
    {
      path: '/image/:id',
      component: SingleImage
    },
    {
      path: '/search/:query',
      component: Search
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
      component: () => import('./views/Samples/AdCombo/ArtBoard.vue')
    },
    {
      path: '/vuex-vuelidate',
      name: 'vuex-vuelidate',
      component: () => import('./views/Samples/VuexVuelidate.vue')
    },
    {
      path: '/grid-box',
      name: 'grid-box',
      component: () => import('./views/Samples/GridBox.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/Samples/Music.vue')
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: () => import('./views/Samples/tourism/Tourism.vue')
    }
  ]
})
