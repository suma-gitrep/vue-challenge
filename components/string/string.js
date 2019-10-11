function larger  (x, y,z)  { 
  const a=x.length;
  const b=y.length;
  const c=z.length;
  if(a>b&&a>c){
  return x }
  else if(b>c&&b>a){
    return y
  }
  else{
  return z
}
}

const large = new Vue({
  el: '#largerstring',
  data: {
    firstString: 'raghu',
    secondString: 'jeevan',
    thirdString:'suma'
  },
  computed: {
    string: function () {
      const i = this.firstString
      const j = this.secondString
      const k=this.thirdString
      
      return `your largest string is ${larger(i, j, k)}.`
    }
  }
})
