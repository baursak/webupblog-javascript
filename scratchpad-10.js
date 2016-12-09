// var user2 = new Object({}); ... not recommended
var user1 = {
  name: 'Lenin',
  login: 'myLogin',
  password: 'pass',
  age: 22,
  logIn: function(){
    console.log(this.name + ' has logged in');
  },
  logOut: function(){
    console.log(this.name + ' has logged out');
  },
};
console.log(user1.name);
user1.logIn();
user1['logOut']();

console.log(user1.firstName);
user1.firstName = 'Vlad'
console.log(user1.firstName);

delete user1.firstName;
console.log(user1.firstName);