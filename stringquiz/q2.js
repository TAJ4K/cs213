const prompt = require("prompt-sync")();

let str = prompt("Enter the main string: ");
let sub = prompt("Enter the substring: ");
let repl = prompt("Enter the replacement string: ");

str.includes(sub) ?
    console.log("The final string is", str.replace(sub, repl)) :
    console.log("ERROR: The substring you entered does not exist in the string");
