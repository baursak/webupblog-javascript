// var user2 = new Object({}); ... not recommended
var user1 = {
  name: 'Vlad',
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
console.log(user1.logIn);