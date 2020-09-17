const name = 'Player';
const surname = 'Unknown';
let age = 30;
alert(`Hello, world! Встречай, JS! Я ${name} ${surname}, и мне ${age}. Рад встрече!`);

const user = {
  name: 'John',
  height: 185,
  age: 28,
  smoking: false,
  friends: ['Bob', 'Max', 'Matt']
};

console.log(user.age);

user.canSingSongs = true;

user.friends = null;

console.log(user);