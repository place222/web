function broadcast (componentName, eventName, params) {
  this.$children.forEach(element => {
    var name = element.$options.componentName
    if (name === componentName) {
      element.$emit.apply(element, [eventName].concat(params))
    } else {
      broadcast.apply(element, [componentName, eventName].concat(params))
    }
  })
}

export default {
  methods: {
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        if (parent) {
          name = parent.$options.componentName
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}
