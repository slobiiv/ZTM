// Scope mean variable excess.
var b = 'Can I have access?';
function bb() {
  var a = 'hello';
  console.log(b); // 'Can I have access?'    Yes!
}
console.log(a); // Error

// ///////////////////////////////////////////////////////////

var fun = 5; // The Root Scope

function funFunction() {
  var fun = 'hellooooo!';
  console.log(1,fun); // hellooooo
}

function funnyFunction(){
  var fun = 'Byeee!';
  console.log(2, fun); // Byeee
}

function funnestFunction(){
  fun = 'AAAAAAHHH!';
  console.log(3, fun); // AAAAAAHHH
}

console.log('window : ', fun); // 5
funFunction(); //  hellooooo!
funnyFunction(); //  Byeee!
funnestFunction(); //  AAAAAAHHH!!

console.log(fun); // AAAAAAHHH!   the third function we've modified fun which is this variable to equals to "AHHHHHH".