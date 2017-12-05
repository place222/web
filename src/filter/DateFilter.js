import Vue from 'vue'

Vue.filter('date', function (val) {
  if (typeof val === 'object' && val instanceof Date) {
    return val.format('yyyy-MM-dd')
  } else if (typeof val === 'string') {
    return new Date(val).format('yyyy-MM-dd')
  }
  return val
})

Vue.filter('month', function (val) {
  if (typeof val === 'object' && val instanceof Date) {
    return val.format('yyyy-MM')
  } else if (typeof val === 'string') {
    return new Date(val).format('yyyy-MM')
  }
  return val
})
