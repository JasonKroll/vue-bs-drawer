// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import VueBsDrawer from './../src/vue-bs-drawer'
// import VueBsDrawer from './../dist/vue-bs-drawer.min.js'
// import './../dist/vue-bs-drawer.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.component('bs-drawer', VueBsDrawer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
