// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//启动注入jquery和bootstrap的支持
//逐步替换成vue组件
import $ from "jquery"
//import "bootstrap/js/bootstrap.js"
import "adminlte/js/adminlte.js"
//等待替换
import "bootstrap/css/bootstrap.css"
import "@/assets/css/font-awesome.css"
import "@/assets/css/ionicons.css"
//皮肤
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
