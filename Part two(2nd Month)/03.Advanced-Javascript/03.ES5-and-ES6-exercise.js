// change everything below to the newer Javascript!

// let + const
let a = 'test'; 
let b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};


/* const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor; */

const {firstName, lastName, age, eyeColor} = person; // ECMAScript

// Object properties
const a = 'test';
let b = true;
const c = 789;

const okObj = {a,b,c};


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age; // ECMA

/* function isValidAge(age) {
    return age
} */

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol('This is my firs Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => {
    if(username && location) {
        return 'I am lost';
    } else {
        return 'I am totally lost!';
    } 
}