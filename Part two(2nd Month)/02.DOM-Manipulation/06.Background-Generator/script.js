/* 
So we want to read what the value what the colors are of both inputs.
And we want to put out a piece of text at the bottom here with those values in the CSS format.
We'll need to select two inputs and then also select the h3 so we can enter CSS text here.  
*/
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
// body.style.background = 'red';

function setGradient() {
  body.style.background = 
  'linear-gradient(to right, '
  + color1.value 
  + ', ' 
  + color2.value 
  + ')'; 

  css.textContent = body.style.background + ';';
}
/* input Event, whenever the input value changes it kicks in */
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

/* 
A few things you can try:

1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.
*/