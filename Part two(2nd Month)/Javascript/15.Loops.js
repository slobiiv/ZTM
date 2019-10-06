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