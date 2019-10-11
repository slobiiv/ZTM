/* 
Exercise: DOM Events

Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)

Good Luck!

Please note that: 

In the browser most code is event driven and writing interactive applications in JavaScript is often about waiting for and reacting to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction. These are all defined by w3c.

To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback. To read more, check out this link: https://blog.codeanalogies.com/2016/04/11/javascript-callbacks-explained-using-minions/

PS - if you have any questions, reach out to our community in the #js or #helpme channel on Discord (Lecture 2 provides the link if you have not yet joined)! 
*/

var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var ul = document.querySelector('ul');
var li = document.querySelector('li');

li.addEventListener('click', function() {
  li.classList.toggle('done');
})


button.addEventListener('click', function() {
  var li = document.createElement('li');
  var deleteBtn = document.createElement('button');
  if(input.value.length > 0) {
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    deleteBtn.appendChild(document.createTextNode('Remove'));
    li.appendChild(deleteBtn);
    input.value = "";
  }
})

input.addEventListener('keypress', function(event){
  var li = document.createElement('li');
  var deleteBtn = document.createElement('button');
  if(input.value.length > 0 && event.keyCode === 13) {
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    deleteBtn.appendChild(document.createTextNode('Remove'));
    li.appendChild(deleteBtn);
    input.value = "";
  }
})

