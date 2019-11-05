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
it's never going to execute again. And the result we put into new function,
it's going to remember that there are references to those variables.
So the CHILD scope always HAS ACCESS to the PARENT scope. 
*/ 
// greet from  the second function has access from a const variable that actually contains a value for it, so it can  be processed.



// Currying - is the process of converting a function that takes multiple arguments into a function that takes them one at a time.
const multiply = (a, b) => a * b;
// now...
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3, 4);
/* If we look at this function compared to here we see exactly what we did, we created a variable
'curriedMultiply' that accepts a parameter.
So it's a function that accepts 'a'.
In this case it's '3' and once you call that function,
once you run it, it returns a(an) another function, that accepts 'b' and that function multiplies 'a' and 'b'.
So what I'm doing here is saying 'curriedMultiplier' 'a' is 3 'b' is 4.
And now multiply 'a' times 'b'. */
// WHY DO WE NEED THIS?
// Because now it's more extensible
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); //25
multiplyBy5(10); //50



// Compose