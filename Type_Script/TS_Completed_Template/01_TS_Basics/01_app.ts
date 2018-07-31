// Hello World App
let greeting:string = 'Good morning';
console.log(greeting);
document.querySelector('#display').textContent = greeting;

// Variables Creation in TypeScript
function addition(a:number,b:number):number{
    return a + b;
}
let add = addition(10,20);
console.log(add);
document.querySelector('#display').textContent = add.toString();


