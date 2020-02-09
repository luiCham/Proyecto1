import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.use(vueaxios, axios);
axios.defaults.baseURL='http://localhost:3000'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
