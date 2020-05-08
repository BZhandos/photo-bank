import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate/src'
import VueScrollTo from "vue-scrollto";

import Input from './components/UI/InputField'
import Dropdown from './components/UI/Dropdown'

Vue.component('my-input', Input)
Vue.component('my-dropdown', Dropdown)

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
