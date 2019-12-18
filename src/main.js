import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate/src'

import Input from './components/UI/InputField'

Vue.component('my-input', Input)

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
