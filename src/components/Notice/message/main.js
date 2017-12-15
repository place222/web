import Vue from 'vue'
import main from './Main.vue'

let MessageControctor = Vue.extend(main)
let instance

const Message = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  instance = new MessageControctor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.show = true
  return instance.vm
}

export default Message
