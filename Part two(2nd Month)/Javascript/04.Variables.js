// How does the program remember things? To catch and hold values, JavaScript uses variables
var firstName = 'Slobodan';
var lastName = 'Vlaic';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Prompt stores the value, assign it to a variable so it will be accessible
prompt('What is your username?');

// Calculator using prompt(), but prompt turns the value in string. Turn string into number with Number(prompt('2'));
var first = Number(prompt('enter first number'));
var second = Number(prompt('enter second number'));
alert(first + second);