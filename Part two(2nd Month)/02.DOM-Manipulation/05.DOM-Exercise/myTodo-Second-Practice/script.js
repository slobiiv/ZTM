/* 
Exercise: DOM Events

Using the Shopping List files from the previous videos update the shopping list app to do the following:

1. If you click on the list item, it toggles the .done  class on and off.

2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.

3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!) 
*/

var button = document.getElementById('enter'); 
var input = document.getElementById('user-input');
var ul = document.querySelector('ul');


function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = ""; 

  var button = document.createElement('button');
  button.appendChild(document.createTextNode('Done!'));
  li.appendChild(button);
  button.onclick = lineThroughParent;

  var button = document.createElement('button');
  button.appendChild(document.createTextNode('Delete!'));
  li.appendChild(button);
  button.onclick = removeParent;
}

function lineThroughParent(event) {
  event.target.parentNode.classList.toggle('done');
}
function removeParent(event) {
  event.target.parentNode.remove();
}

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
  if(inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress); 
//  Call-back Functions - We don't want the (addLisAfterClick,addListAfterKeypress) functions to run because we are just adding the event listener to wait for click or keypress



























/* ********REFACTORING CODE - DRY
button.addEventListener('click', function() {
  if(input.value.length > 0) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 
  }
})

input.addEventListener('keypress', function(event) {
  if(input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 
  }
}) 
*/