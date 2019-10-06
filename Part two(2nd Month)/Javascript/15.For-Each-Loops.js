var todos = [
  'clean room',
  'brush teeth',
  'exercise',
  'study javascript',
  'eat healthy'
];

todos.forEach(function(todo,i) {
  console.log(todo,i); // logs all array items
})
/* 
forEach takes an array and it asks for an argument, that is 'tell me what to do with it'. 
This function receives the argument of 'todo', which is that each individual item in the todos. 
And second argument is for index of individual item
*/



/* The power of forEach, the function logTodos can be reusable for maybe some other Arrays */
var todosImportant = [
  'clean room!',
  'brush teeth!',
  'exercise!',
  'study javascript!',
  'eat healthy!'
];
function logTodos(todo, i) {
  console.log(todo, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);

