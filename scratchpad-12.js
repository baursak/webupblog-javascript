// ARRAYS
var fruits1 = [
  'apple',
  'lemon',
  'orange'
];
console.log(fruits1.length);
var fruits2 = new Array('apple', 'lemon', 'orange', 'plum');
console.log(fruits2.length);
console.log(fruits2[3]);
fruits2[4] = 'carrot';
console.log(fruits2[4]);
fruits2.push('pineapple');
console.log(fruits2[5]);
console.log(fruits2);
var i;
for (i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}