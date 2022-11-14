const prompt = require("prompt-sync")();
let str1 = prompt("Enter the first string: ");
let str2 = prompt("Enter the second string: ");

let findLonger = (str1, str2) => str1.length >= str2.length ? str1 : str2;

console.log("The longer string is", findLonger(str1, str2));
