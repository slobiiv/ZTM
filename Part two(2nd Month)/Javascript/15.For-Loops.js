var todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy'
];
// variable; as long as i is less than todos.length; i + 1;
for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + '!';  // 'clean room' = 'clean room' + '!'
}
//  NOW : todos = ["clean room!","brush teeth!","exercise!","study javascript!","eat healthy!"] 

// What if we want to remove the todos?
var todosLength = todos.length; // 5
for (var i = 0; i < todosLength; i++) {
  todos.pop();
}
// We made a variable for todos.length because otherwise pop() will suddenly stop at second index and left in array. 3 < todos.length(2) so it won't remove a value