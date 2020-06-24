function firstfunction() {
  console.log("helooooo");
  a > b ? console.log(a+" is greater than "+b) : console.log(b+" is greater than "+a)
  a > b ? result = a : result = b;
  return result;
}
var a = 10;
var b = 20;
var res = firstfunction();
console.log(res);

var c = 2;
var d = 10;
var ret = function(c,d) {
  var result;
  c > d ? result = ["c",c] : result = ["d",d];
  console.log(result);
}
console.log(ret(10,25));
var res = (function() {
  var resul;
  c < d ? resul = c : resul = d
  console.log(resul)
})()
console.log(res);
