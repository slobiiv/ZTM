/* 
You can use JavaScript to listen to events and that based on what the user does.
Events are things like clicking, mouse entering or hovering over something or user trying something in a search bar.
*/
/*  
The most common Events you'll see 90 percent of the time are MOUSE events and KEYBOARD events. 
*/

/* var button = document.getElementsByTagName('button')[0]; // returns an array of buttons (It shows error if not treated as array)
button.addEventListener('click', function() {
  console.log('click');
});

var button = document.getElementsByTagName('button')[0];
button.addEventListener('mouseenter', function() {
  console.log('click');
}); */



// TODO LIST
/* Selecting elements */
var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var ul = document.querySelector('ul');

// Function which checks the length of input
function inputLength() {
  return input.value.length;
}

// This function creates a <li> element and pushes it inside <ul> element with the input value
function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value)); // adding created <li> tag with the input value
  ul.appendChild(li); // We need to attach this to the unordered list.
  input.value =""   /* Clear the input  after adding  */
}

// Function which checks the length of the input, and if it's bigger than 0, adds the created <li> element
function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}
// MOUSE CLICK EVENT 
// add created element with the CLICK event
button.addEventListener('click', addListAfterClick);

// Function which checks the length of the input, and the 'ENTER' keyboard Code, if true, adds the created <li> element
function addListAfterKeyPress(event) {
  if(inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
// KEYBOARD EVENT
// add created element with the KEYPRESS event
input.addEventListener('keypress',addListAfterKeyPress);



/* NOTE: Callback Functions

In the previous video you saw something interesting:
Event listener syntax : 

    button.addEventListener("click", addListAfterClick);
    input.addEventListener("keypress", addListAfterKeypress);

You didn't see the function being called like this as you may have expected: 

    button.addEventListener("click", addListAfterClick());
    input.addEventListener("keypress", addListAfterKeypress(event));

This is something called a callback function. 
When that line of javascript runs, we don't want the addLisAfterClick function to run 
because we are just adding the event listener now to wait for click or keypress. 
We want to let it know though that we want this action to happen when a click happens. 
So the function now automatically gets run (gets added the ()) every time the click happens. 
So we are passing a reference to the function without running it. 
*/