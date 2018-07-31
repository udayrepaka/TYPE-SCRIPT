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
let greet  =  function(){
    return "Good Morning from normal function"
};
console.log(greet());

let greetArrow = () =>"Good Morning from Arrow function";
console.log(greetArrow());

// Normal function with Args and Arrow Function
let addition = function(a:number,b:number){
                return a + b;
            };
console.log(`normal : ${addition(10,20)}`);

let additionArrow =  (a:number , b:number) => a + b;
console.log(`Arrow : ${additionArrow(10,20)}`);


// Normal function to find the sum of two numbers with Arrow Function


// Normal function to find the length of an array with Arrow Function
let array:Array<number> = [10,20,30,40,50];
let len  = function (array) {
    return array.length;
};
console.log(`normal: ${len(array)}`);

let lenArrow = (a) => a.length;
console.log(`Arrow :${lenArrow(array)}`);

// Create an array with the length of each element of an array

let movies = ['Baahubali' , 'Dangal' , 'Drushyam'];

let movieLength = movies.map(function (movie) {
        return movie.length;
    }
);

// Arrow Function for the above example

let movieLenghtArrow = movies.map(movie => movie.length);
console.log(movieLenghtArrow);