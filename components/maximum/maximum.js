const maxi = (x, y) => { 
  return Math.max(x,y)
 }

const subtracter = new Vue({
  el: '#maximum',
  data: {
    one: 6,
    two: 2
  },
  computed: {
    maximumnum: function () {
      const i = parseInt(this.one)
      const j = parseInt(this.two)
      return `The maximum of ${this.one} and ${this.two} is ${maxi(i, j)}.`
    }
  }
})