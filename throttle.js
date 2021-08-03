var throttle = function(fn, interval) {
  var _slef = fn,
      timer,
      firstTime = true
  return function() {
    var args = arguments,
        _me = this
    if (firstTime) {
      _slef.apply(_me, args)
      return firstTime = false
    }

    if (timer) return false

    timer = setTimeout(function() {
      clearTimeout(timer)
      timer = null
      _slef.apply(_me, args)
    }, interval || 500)

  }
}

const demo = throttle(function() {
  console.log(arguments)
}, 2000)

setInterval(() => {
  demo(1,2,3)
}, 200)