/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/
// Usage of for...in loop from ES5
var languages = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSCRIPT', 'ANGULARJS'];
var output = '';
for (var index in languages) {
    var elem = languages[index];
    output += elem + " ";
}
console.log(output);
document.querySelector('#display').textContent = output;
// Usage of for...of loop from ES6
output = '';
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var elem = languages_1[_i];
    output += elem + "  ";
}
console.log(output);
document.querySelector('#display').textContent = output;
