// https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8691784#questions

/* function first() {
  var greet = 'Hi';
  function second() {
    alert(greet);
  }
  return second;
}

var newFunc = first();
newFunc(); 
*/
// ECMAScript
const first = () => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

const newFunc = first();
newFunc();

/* 
'closures' - is just saying a function ran,
the function executed,
it's never going to execute again.
But it's going to remember that there are references to those variables.
So the child scope always has access to the parent scope. 
*/ 
// greet from  the second function has access from a const variable that actually contains a value for it, so it can  be processed.


// Currying - is the process of converting a function that takes multiple arguments into a function that takes them one at a time.