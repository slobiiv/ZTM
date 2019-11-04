ECMAScript === Javascript;
Babel = 'JavaScript complier'; // compile meanst hat it reads a file line by line, and then changes it to a version of javascript that all browsers know and it works on all browsers.

// let and const (new ways of declaring variables)
const player = 'Bobby';
let experience = 100;
let wizzardLevel = false;

if(experience > 90) {
  let wizzardLevel = true; // *let is making a scope in between curly brackets
  console.log('inside', wizzardLevel); // true
}

console.log('outside', wizzardLevel); // false

const player = 'Scooby'; // Error, can't change the constant value

// const object

const obj = {
  player: 'Bobby',
  experience: 100,
  wizzardLevel: false
}
obj.player = 'Slobo'; //changing a property of the object, but can't reasign the variable



/* DESTRUCTURING */
// Old way
const player = obj.player;
const experience = obj.experience;
let wizzardLevel = obj.wizzardLevel;
// New way
const {player, experience} = obj; // accessing properties inside object with ECMAScript

/* Object Properties */
const name = 'john snow';

const obj2 = {
  [name] : 'hello!',
  [1 + 2] : 'hihhihi'
}

const a = 'john snow';
const b = true;
const c = {};

const obj3 = {
/* If they are the same:
  a : a,
  b : b,
  c : c 
  we do :*/
  a, b, c
}



/* Template Strings */
// const greeting = 'Hello' + name + ', how are you.' + greeting + '!';
// const name = 'Sally';
// const age = 37;
// const pet = 'Horse';
// const greetingECMA = `Hello ${name}, how are you. ${age - 10}. What a geourges ${pet} you have!`;


/* Default Arguments */
function greet(name='', age = 31, pet = 'Rabbit') {
  return greetingECMA = `Hello ${name}, how are you. ${age - 10}. What a geourges ${pet} you have!`;
}


/* SYMBOL */
let sym = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3; // false