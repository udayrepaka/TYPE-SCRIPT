/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/
// Create a function and provide few default parameters using ES6
function greet(name, age) {
    if (age === void 0) { age = 50; }
    var greeting = 'Hello ' + name + ' Your age ' + age + ' year old!';
    console.log(greeting);
    document.querySelector('#display').textContent = greeting;
}
greet('John');
