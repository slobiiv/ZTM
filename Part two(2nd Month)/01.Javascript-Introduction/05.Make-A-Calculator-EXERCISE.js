/* *********************************************************
                      PRACTICE
************************************************************/

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


var firstNumber = prompt('Please provide the first number');
var secondNumber = prompt('Please provide the second number');
var sum = Number(firstNumber) + Number(secondNumber);
alert(sum);



/*  
  We didn't do an if else statement but i couldn't know better

  var firstNum = prompt('Number1');
  var secondNum = prompt('Number2');
  var operation = prompt('What do you want me to do with these two numbers?');
  var sum;
  if(operation === '-') {
    sum = alert(Number(firstNum) - Number(secondNum));
  }else if(operation === '+') {
    sum = alert(Number(firstNum) + Number(secondNum));
  }else if(operation === '*') {
    sum = alert(Number(firstNum) * Number(secondNum));
  }else if(operation === '/') {
    sum = alert(Number(firstNum) / Number(secondNum));
  } */
  


// BONUS: Make a program that can subtract, multiply, and also divide!