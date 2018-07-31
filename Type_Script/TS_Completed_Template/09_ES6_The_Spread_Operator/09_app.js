/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
/*use spread operator to pass it as an arguments*/
var arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 48954, 486, 4848, 497897, 9877];
var max = Math.max.apply(Math, arr1);
console.log("MAX :" + max);
//use the spreas operator to add an array in the middle of another array
var number1 = [30, 40, 50];
var number2 = [10, 20].concat(number1, [60, 70, 80]);
console.log("Number2 Array :" + number2);
// create a copy of an array
var languages1 = ['HTML', 'CSS', 'javascript', 'Bootstrap'];
var languages2 = languages1.slice(); //create a separate copy without using slice()
console.log(languages2);
