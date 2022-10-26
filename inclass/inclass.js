let prompt = require('prompt-sync')();
let a = prompt("Enter the first number: "), b = prompt("Enter the second number: ");
parseInt(a)*parseInt(b)==parseInt(prompt(`Enter the result of ${a}*${b}: `)) ? console.log("Your answer is correct!") : console.log(`Your answer is wrong!\nThe correct answer is ${parseInt(a)*parseInt(b)}`);