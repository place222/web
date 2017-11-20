// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//启动注入jquery和bootstrap的支持
import jQuery from "jquery"
import "bootstrap/js/bootstrap.min.js"
import "adminlte/js/adminlte.js"
import "bootstrap/css/bootstrap.min.css"
import 'adminlte/css/AdminLTE.css'
import "adminlte/css/skins/skin-blue.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
