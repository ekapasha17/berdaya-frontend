// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Reg from './components/Register'
import router from './router'

Vue.config.productionTip = false
window.Vue = require('vue')
/* eslint-disable no-new */
new Vue({
  el: '#register',
  router,
  components: { Reg },
  template: '<Reg/>'
})
