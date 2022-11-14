let name = require("prompt-sync")()("Enter your name: ");
console.log("Your name starts with", name[0]);
console.log("Your name ends with", name[name.length-1])
console.log("Your name has", name.length, "letters in it");

