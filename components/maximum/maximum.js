const maxi = (x, y) => { 
  return Math.max(x,y)
 }

const subtracter = new Vue({
  el: '#maximum',
  data: {
    first: 6,
    second: 2
  },
  computed: {
    maximumnum: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      return `The maximum of ${this.first} and ${this.second} is ${maxi(i, j)}.`
    }
  }
})