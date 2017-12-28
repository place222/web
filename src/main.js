// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 全局扩展
import '@/mixins/util/log.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import Message from '@/components/Notice/message/main.js'
import Axios from 'axios'
import './filter/DateFilter'
import Mo from './Mo'

Vue.config.productionTip = false

Vue.use(Mo)

Vue.prototype.$message = Message
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
