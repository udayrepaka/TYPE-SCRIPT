/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let employee = ['Jone', 40 , 'Manager'];
/*
  let eName = employee[0];
  let eAge = employee[1];
  let eDesg = employee[2];
 */
let[eName , eAge , eDesg]= employee;
console.log(`Name : ${eName} Age :${eAge} Desg :${eDesg}`);


// Usage of Destructing to exchange the values of two vars
let a = 10;
let b = 20;
/*
    let temp = a;
    a= b;
    b = temp;
 */
[a , b] =[b , a];
console.log(`a : ${a} b:${b}`);

// Usage of Destructing to assign each variable of an Object to other vars
let student ={
    name :'uday',
    age : 22,
    course :'Engg'
};
/*
    let sName = student.name;
    let sAge = student.age;
    let sCourse = student.course;
    console.log(` Name :${sName} Age :${sAge} Course : ${sCourse}`);
*/

let {name:sname, age:sage, course:sCourse}=student;
console.log(` Name :${sname} Age :${sage} Course : ${sCourse}`);

// Best usage is to exchange the value btw a & b
