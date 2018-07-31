/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let languages:Array<string> = ['HTML','CSS','JAVASCRIPT','BOOTSCRIPT','ANGULARJS'];
let output = '';
for(let index in languages){
    let elem = languages[index];
    output += `${elem} `;
}
console.log(output);
document.querySelector('#display').textContent = output;

// Usage of for...of loop from ES6
output = '';
for(let elem of languages){
    output +=  `${elem}  `;
}
console.log(output);
document.querySelector('#display').textContent = output;