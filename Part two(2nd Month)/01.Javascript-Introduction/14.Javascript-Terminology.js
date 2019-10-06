// function declaration
function newFunction() {

}


// function expression
var newFunction = function() {

}; // ends with semicolon


// calling or invoking a function
alert();
newFunction(param1, param2);


// function vs method
function thisIsAFunction() {}
thisIsAFunction(); // the way we access the function

// method is a function inside object
var obj1 = {
  thisIsAMethod: function(){
    console.log('This is a Method');
  }
}
obj1.thisIsAMethod(); // the way we access the method


// expression - is something that produces a value
1 + 3;
var a = 5;
