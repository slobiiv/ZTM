/* 
You can use JavaScript to listen to events and that based on what the user does.
Events are things like clicking, mouse entering or hovering over something or user trying something in a search bar.
*/
/*  
The most common Events you'll see 90 percent of the time are mouse events and keyboard events. 
*/
var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function() {
  console.log('click');
});