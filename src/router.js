import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/PhotoBank/Home.vue'
import SingleImage from './views/PhotoBank/pages/imageInfo/SingleImage'
import Search from './views/PhotoBank/Result'

import TechnodomUserInfo from './views/Samples/Technodom/TechnodomUserInfo'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/images',
      name: 'PhotoBank',
      component: Home
    },
    {
      path: '/',
      name: 'CV',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CV/Index.vue')
    },
    {
      path: '/reading',
      name: 'SpeedReading',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Samples/SpeedReading/SpeedReading.vue')
    },
    {
      path: '/beeline',
      name: 'Beeline',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Samples/Beeline/Index.vue')
    },
    {
      path: '/technodom/user',
      name: 'Technodom',
      component: () => import(/* webpackChunkName: "about" */ './views/Samples/Technodom/Index.vue'),
      children: [
        {
          path: ':id',
          name: 'TechnodomUserInfo',
          component: TechnodomUserInfo,
        }
      ]
    },
    {
      path: '/da-data',
      name: 'DaData',
      component: () => import(/* webpackChunkName: "about" */ './views/Samples/DaData/DaData.vue')
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
      name: 'CrtWeb',
      component: () => import('./views/Samples/CrtWeb/CrtWeb.vue')
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
