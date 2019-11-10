// Type Coercion -  means the language converting a certain type to another type. It happens while using double equal'=='
1 == '1' //true

if(1) {
  console.log(5);
}
// logs 5, because browser sees 1 as a true value.


// JAVASCRIPT EQUALITY TABLE : https://dorey.github.io/JavaScript-Equality-Table/


/* STICK TO TRIPPLE EQUALS '===' */

Object.is(-0, +0);  // false