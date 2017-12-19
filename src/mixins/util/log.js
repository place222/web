import Vue from 'vue'

/**
 * 只跟vue示例关联了 我要弄个全局的
 */
Object.assign(Vue.prototype, {
  $log: function (msg) {
    console.log(msg)
  },
  $warn: function (msg) {
    console.warn(msg)
  },
  $error: function (msg) {
    console.error(msg)
  }
})
