var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var ul = document.querySelector('ul');


button.addEventListener('click', function() {
  var li = document.createElement('li');
  if(input.value.length > 0) {
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
})

input.addEventListener('keypress', function(event){
  var li = document.createElement('li');
  if(input.value.length > 0 && event.keyCode === 13) {
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
})