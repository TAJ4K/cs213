const prompt = require("prompt-sync")();

let mainstr = prompt("Enter the main string: ");
let sub = prompt("Enter the substring: ");
let repl = prompt("Enter the replacement string: ");

mainstr.includes(sub) ?
    console.log("The final string is", mainstr.replace(sub, repl)) :
    console.log("ERROR: The substring you entered does not exist in the string");
