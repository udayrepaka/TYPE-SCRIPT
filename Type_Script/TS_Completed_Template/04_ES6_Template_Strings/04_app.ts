/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/


/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
let employee ={
    name : 'john',
    age : 25,
    desg : 'Manager'
};
 let strConcat:string = "<div style='background-color: orangered'>" +
                    "<h3>" + employee.name + "</h3>" +
                    "<h3>" + employee.age +"</h3>" +
                    "<h3>" + employee.desg + "</h3>" +
                "</div>";
 document.querySelector("#container").innerHTML  = strConcat;


 /* Template string*/
let templateStr:string = `<div style="background-color: lightskyblue">
                            <h3>${employee.name}</h3>
                            <h3>${employee.age}</h3>
                               <h3>${employee.desg}</h3>
                           </div>`;
document.querySelector("#container").innerHTML = templateStr;