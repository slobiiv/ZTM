var input = document.querySelector('input');
var addBtn = document.getElementById('addBtn');
var deleteBtn = document.getElementsByClassName('delete');
var ul = document.getElementById('tasks');

addBtn.addEventListener('click', function() {
  if(input.value.length > 0) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
  
    input.value = "";

    deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);
  }
})

input.addEventListener('keypress', function(event) {
  if(input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
  
    input.value = "";

    deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deleteBtn);
  }
})


