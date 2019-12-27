import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate/src'

import Input from './components/UI/InputField'
import Dropdown from './components/UI/Dropdown'

Vue.component('my-input', Input)
Vue.component('my-dropdown', Dropdown)

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
