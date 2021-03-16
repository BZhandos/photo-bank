import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './storage/store'
import Vuelidate from 'vuelidate/src'
import VueScrollTo from 'vue-scrollto'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueGtag from 'vue-gtag'
import 'swiper/css/swiper.css'
import components from '@/components/components'

import Input from './components/UI/InputField'
import Dropdown from './components/UI/Dropdown'

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.component('my-input', Input)
Vue.component('my-dropdown', Dropdown)

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueScrollTo)
Vue.use(VueAwesomeSwiper)
Vue.use(VueGtag, {
  config: { id: 'UA-155045974-1' }
})

for (let item in components) {
  if (components.hasOwnProperty(item)) {
    Vue.component(item, components[item])
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
