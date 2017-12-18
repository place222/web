export default function (idle, action) {
  var last
  return function () {
    var cts = this,
      args = arguments
    clearTimeout(last)
    last = setTimeout(() => {
      action.apply(cts, args)
    }, idle)
  }
}
