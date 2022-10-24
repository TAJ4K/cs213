let prompt = require('prompt-sync')();

let a = prompt("enter a number:");
let b = prompt("enter another number:");

parseInt(a)*parseInt(b)==parseInt(prompt(`Enter the value of multiplying ${a} and ${b}`)) ? console.log("Correct!") : console.log("Wrong :(")
