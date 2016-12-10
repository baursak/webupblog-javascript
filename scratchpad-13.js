var array = [1,2,3,4,5];
// PUSH
// array.push(6,7,8);
// POP
// array.pop();
//UNSHIFT
// array.unshift(0);
//SHIFT
// array.shift();
// POP and SHIFT return removed element
//MAP
// var mapped = array.map(function(element, index){
//   return element + index;
// });
//FILTER
// var filtered = array.filter(function(element){
//   var result = (element > 2);
//   return result;
// });
//REDUCE
var reducedValue = array.reduce(function(acc, element, index){
  return acc + element;
});
console.log(reducedValue);