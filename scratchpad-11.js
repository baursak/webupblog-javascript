// Closures
function counter() {
  var a = 0;
  return function add() {
    a++;
    console.log(a);
  }
}
var plus = counter();
plus();
plus();
plus();
plus();
