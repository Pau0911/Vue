import Vue from 'vue'
import App from './App.vue'


import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'

import router from './router'



Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
