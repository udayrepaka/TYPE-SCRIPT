/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var employee = ['Jone', 40, 'Manager'];
/*
  let eName = employee[0];
  let eAge = employee[1];
  let eDesg = employee[2];
 */
var eName = employee[0], eAge = employee[1], eDesg = employee[2];
console.log("Name : " + eName + " Age :" + eAge + " Desg :" + eDesg);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
/*
    let temp = a;
    a= b;
    b = temp;
 */
_a = [b, a], a = _a[0], b = _a[1];
console.log("a : " + a + " b:" + b);
// Usage of Destructing to assign each variable of an Object to other vars
var student = {
    name: 'uday',
    age: 22,
    course: 'Engg'
};
/*
    let sName = student.name;
    let sAge = student.age;
    let sCourse = student.course;
    console.log(` Name :${sName} Age :${sAge} Course : ${sCourse}`);
*/
var sname = student.name, sage = student.age, sCourse = student.course;
console.log(" Name :" + sname + " Age :" + sage + " Course : " + sCourse);
var _a;
// Best usage is to exchange the value btw a & b
