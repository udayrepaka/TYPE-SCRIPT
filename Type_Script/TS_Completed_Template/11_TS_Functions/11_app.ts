// Create a simple function to add two numbers
function addition(a:number,b:number):number{
    let sum:number = a + b;
    return sum;
}
console.log(`The Sum of 10,20 is : ${addition(10,20)}`);

// Create the same add function with first number as 'any' type
function addAny(a:any,b:number):number{
    let sum = 0;
    if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            sum = b;
        }
        else{
            sum = parseFloat(a) + b;
        }
    }
    else if(typeof a === 'number'){
        sum = a + b;
    }
    else{
        sum = b;
    }
    return sum;
}
console.log(`Add : 10 , 20 : ${addAny(10,20)}`); //30
console.log(`Add : "10" , 20 : ${addAny("10",20)}`); //30
console.log(`Add : "abc" , 20 : ${addAny("abc",20)}`); //20
console.log(`Add : {} , 20 : ${addAny({},20)}`); //20
console.log(`Add : true, 20 : ${addAny(true,20)}`); //20

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    // Only one param
    if(b === undefined && c === undefined){
        return a;
    }
    // for 2 params
    else if(c === undefined){
        return Math.max(a ,b);
    }
    // for 3 params
    else{
        return Math.max(a,b,c);
    }
}
console.log(`Max : 10 : ${findMax(10)}`);
console.log(`Max : 10 , 20 : ${findMax(10,20)}`);
console.log(`Max : 10 , 20 , 30 : ${findMax(10,20,30)}`);


