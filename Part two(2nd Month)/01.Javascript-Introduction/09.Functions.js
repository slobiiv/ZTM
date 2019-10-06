/* 
Functions are piece of code, that perform actions 
With functions we have 2 options:
One - is using existing JavaScript functions, like 'alert' and 'prompt'.
and Two - we can create our own.

() - this brackets execute the function. 
('Hi there');('Hi there',firstName);- Arguments' are what's given to functions.

-------
REVIEW:
-------
alert - function
alert() - calling a function to execute
alert(firstName) - calling a function with an argument to execute
*/

/* LET'S CREATE OUR OWN FUNCTIONS: */
// Function Declaration
function sayHello() { // function name is sayHello
  console.log('Hello');
}
sayHello();

// Adding arguments - Arguments allow us to not repeat ourselves and make our functions more extensible.
function sing(song) {
  console.log(song);
}
sing('Laaa deee daaa');
sing('Daaaddaa didddii');
sing(' backstreets back alright');


function multiply(a, b){
  return a * b; // when we return something, the program exits so...
  // return a + b; this line will not be returned.
}
multiply(5,4);

function add(a, b) {
  if(a > 10 || b > 10) {
    return 'That is over 10!';
  } else {
    return a + b;
  }
}
add(4,7); // 11
add(4,11); // That is over 10!


// Function Expression (assigning the function to a variable)
var sayBye = function() { // function name is anonymous
  console.log('Good Bye!');
}
sayBye();


/*  We can have inner functions. So in JavaScript functions are 'variables'.*/
function division(a, b) {
  return (a / b);
}
/* 
  instead:
  var total = division(12,4);
  alert(total);
  we write this way:
*/
alert(division(12, 4)); // it will alert number 3



/* CONCEPT OF PARAMETERS AND ARGUMENTS 
function multiply(a, b){ // (a, b) ARE PARAMETERS
  return a * b; 
}
multiply(5,4); // (5, 4) ARE ARGUMENTS
*/
