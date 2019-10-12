/* 
Exercise: DOM Events

Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off. DONE BY MYSELF (ARSEN HELPED!)

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
var li = document.querySelectorAll('li');
var btn = document.querySelector('ul').getElementsByTagName('button');

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var delBtn = document.createElement('button');
  delBtn.appendChild(document.createTextNode('delete'));
  li.appendChild(delBtn);
  delBtn.onclick = removeParent;
  //THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
}

function removeParent(evt){
	evt.target.parentNode.remove();
}

for(var i = 0; i < li.length; i++) {
  li[i].onclick = function (event) {
    return event.target.classList.toggle('done');
  };
}

for(var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (event) {
    return event.target.parentNode.remove(parent);
  };
}




function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}
button.addEventListener('click', addListAfterClick);

function addListAfterKeyPress(event) {
  if(inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
input.addEventListener('keypress', addListAfterKeyPress);
