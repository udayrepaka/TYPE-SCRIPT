/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */

/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/



/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/



/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */


// You can also use template strings, which can span multiple lines and have embedded expressions.



/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */


/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */


/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */


/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */

//Number Data type
let TS_Version:number = 2.9;
console.log(`TS_version : ${TS_Version}`);

//string Data type
let language:string = 'typescript';
console.log(`language :${language}`);

//Boolean Datatype
let isTSEasy:boolean = true;
console.log(`isTSEasy :${isTSEasy}`);

// any datetype
let anyVar:any = 'test';
anyVar = 200;
console.log(`anyvar : ${anyVar}`);
anyVar = true;
console.log(`anyvar : ${anyVar}`);
anyVar = [10,20,30];
console.log(`anyvar : ${anyVar}`);

//Enum Data type
enum Months {
    jan = 'January',
    feb = 'February',
    mar = 'March'
}
console.log(`jan : ${Months.jan}`);//january
//Months.jan = 'January';//we cannt re-assign bcoz it is readonly

//void Data type(no return type for a function)
function greet():void{
    console.log('Good Morning');
}
greet();

