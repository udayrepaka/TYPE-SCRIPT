/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal No-args function , same Arrow Function
var greet = function () {
    return "Good Morning from normal function";
};
console.log(greet());
var greetArrow = function () { return "Good Morning from Arrow function"; };
console.log(greetArrow());
// Normal function with Args and Arrow Function
var addition = function (a, b) {
    return a + b;
};
console.log("normal : " + addition(10, 20));
var additionArrow = function (a, b) { return a + b; };
console.log("Arrow : " + additionArrow(10, 20));
// Normal function to find the sum of two numbers with Arrow Function
// Normal function to find the length of an array with Arrow Function
var array = [10, 20, 30, 40, 50];
var len = function (array) {
    return array.length;
};
console.log("normal: " + len(array));
var lenArrow = function (a) { return a.length; };
console.log("Arrow :" + lenArrow(array));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
// Arrow Function for the above example
var movieLenghtArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLenghtArrow);
