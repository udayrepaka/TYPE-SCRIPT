/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
/*use spread operator to pass it as an arguments*/
let arr1 = [10,20,30,40,50,60,70,80,48954,486,4848,497897,9877];
let max = Math.max(...arr1);
console.log(`MAX :${max}`);


//use the spreas operator to add an array in the middle of another array
let number1 = [30,40,50];
let number2 = [10,20,...number1,60,70,80];
console.log(`Number2 Array :${number2}`);

// create a copy of an array
let languages1 =['HTML','CSS','javascript','Bootstrap'];
let languages2 =[...languages1];//create a separate copy without using slice()
console.log(languages2);


















