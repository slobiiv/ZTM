// How does the program remember things? To catch and hold values, JavaScript uses variables Variables can hold any JavaScript types
var name = 'Slobodan';
var surname = 'Vlaic';
var fullName = name + ' ' + surname;
console.log(fullName);

// Prompt stores the value, assign it to a variable so it will be accessible
prompt('What is your username?');

// Calculator using prompt(), but prompt turns the value in string. Turn string into number with Number(prompt('2'));
var first = prompt('enter first number');
var second = prompt('enter second number');
var sum = Number(first) + Number(second);
alert('The sum is ' + sum);


var y; // undefined value - means nothing is assigned to a variable




/* *********************************************************
                      PRACTICE
************************************************************/

// Evaluate what answers you would get if you ran this in the
// Javascript Console in Google Chrome. Answer the questions then 
// check them by copying them and running it in the console yourself 
// line by line 

// add variable "firstName" and "lastName" // so that they equal your name
var firstName = 'Slobodan';
var lastName = 'Vlaic';
  
// create a variable that holds the answer // of "firstName" + " " + "lastName"
var myFullName = firstName + " " + lastName;
// Evaluate this question. What is a + b?
var a = 34;
var b = 21;
a = 2;
a + b // what is the answer here? 23

// What is c equal to?
var c; // undefined
