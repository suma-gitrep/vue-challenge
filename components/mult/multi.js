const multi = (x, y) => { return x * y  }

const mult = new Vue({
  el: '#multiplier',
  data: {
    firstNum: 5,
    secondNum: 3
  },
  computed: {
    multiply: function () {
      const i = parseInt(this.firstNum)
      const j = parseInt(this.secondNum)
      return `your value after multiplying is ${multi(i, j)}.`
    }
  }
})
