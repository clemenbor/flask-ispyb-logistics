import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'typeface-cantarell'
import 'tailwindcss/tailwind.css'
import axios from 'axios'

import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
