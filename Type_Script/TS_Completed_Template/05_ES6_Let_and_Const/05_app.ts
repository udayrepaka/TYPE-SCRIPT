/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/

// Usage of let vs Var inside for loop created variables
for(var i=0; i<=10; i++){
    console.log(i);
}
console.log(i);// we can access with 'var'

for(let j=0; j<=10 ; j++){
    console.log(j);
}
//console.log(j);//we cant access with 'let'

// Usage of let vs var inside if block
if(100 === 100){
    var dept1 = 'Engineering';
    let dept2 = 'Medical';
}
console.log(dept1);
//console.log(dept2);// we cant access

// Usage Const variable creation
const APP_NAME = 'Calculator';
//APP_NAME = 'Calculator'; // we canot use

