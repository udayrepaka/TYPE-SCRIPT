// Create a simple function to add two numbers
function addition(a, b) {
    var sum = a + b;
    return sum;
}
console.log("The Sum of 10,20 is : " + addition(10, 20));
// Create the same add function with first number as 'any' type
function addAny(a, b) {
    var sum = 0;
    if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            sum = b;
        }
        else {
            sum = parseFloat(a) + b;
        }
    }
    else if (typeof a === 'number') {
        sum = a + b;
    }
    else {
        sum = b;
    }
    return sum;
}
console.log("Add : 10 , 20 : " + addAny(10, 20)); //30
console.log("Add : \"10\" , 20 : " + addAny("10", 20)); //30
console.log("Add : \"abc\" , 20 : " + addAny("abc", 20)); //20
console.log("Add : {} , 20 : " + addAny({}, 20)); //20
console.log("Add : true, 20 : " + addAny(true, 20)); //20
function findMax(a, b, c) {
    // Only one param
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
console.log("Max : 10 : " + findMax(10));
console.log("Max : 10 , 20 : " + findMax(10, 20));
console.log("Max : 10 , 20 , 30 : " + findMax(10, 20, 30));
