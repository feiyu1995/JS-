Function.prototype.bind = function() {
  const self = this
  const context = [].shift.call(arguments)
  const args = [].slice.call(arguments)
  return function() {
    return self.call(context, [].concat.call(args, [].slice.call(arguments)))
  }
}


const demo = {
  text: 'demo',
  say() {
    console.log(this.text)
  }
}

const hh = {
  text: 'hh'
}

const b = demo.say.bind(hh)

b()