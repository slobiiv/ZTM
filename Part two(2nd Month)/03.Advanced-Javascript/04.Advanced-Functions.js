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
  CLOSURES- is just saying a function ran,
the function executed,
it's never going to execute again. And the result we put into new function,
it's going to remember that there are references to those variables.
So the CHILD scope always HAS ACCESS to the PARENT scope. 
*/ 
// greet from  the second function has access from a const variable that actually contains a value for it, so it can  be processed.



// CURRYING - is the process of converting a function that takes multiple arguments into a function that takes them one at a time.
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




// COMPOSE - Compose' is the act of putting two functions together to form a third function where the output of one function is the input of the other

// A Compose looks like this :
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
//       f    g   a
compose(sum, sum)(5);
/* 
If both 'f' and 'g' are 'sum' and 'a' is 5, we look at what the function returns.
And because again we have two brackets we're executing the first part of the function which returns
us in other function which is this: (a) => f(g(a))
And within it we give the 'a', 5.
So when this (a) => f(g(a)) function runs it says 'a' is 5. (a) => f(g(5))
OK.
And then let's run the inner function 'g'.  (a) => f(sum(5))
In this case it's sum.
So if you remember sum is just saying give me five and then five plus one.
So now this changes to six. (a) => f(6)
And then finally the 'f' function runs which is again 'sum'. (a) => f(6)
And this says 'sum' is giving me six.
So six plus one is seven. f(7)
And this whole thing returns seven.
 */


// Most important thing that you can do as a web developer :
// Avoiding Side Effects , Functional Purity
/* 
  Side effects are any of these things, any of actions that happen, inside of the function that we don't really know anything about. If it interacts or reads or writes to an external variable for example or 'console logs', well that's a side effect. 
*/
/* 
  But it is good practice to avoid the side effects and by avoiding the side effects, we have something
called functional purity and functional purity is a concept where we say, in order for us to write really really good programs we want to avoid
side effects and we always want a return, we always return something.
And what's the power in this? By avoiding side effects and always returning,
We create something that we call 'Deterministic' 
Thatt means that, no matter what if my inputs, let's say five and ten go through this function.
This little universe, the return value will be always the same.

Whether it's empty or it has certain parameters. It always returns, if we run this a thousand times.
It always returns the same value. That's 'Determinism'.
*/

/* 
It is really really good practice to be a top performing developer to have this in mind,
of creating functions that minimize side effects and have functional purity.
What we call 'Determinism', where anything you put into the function it always returns the same thing. 
*/