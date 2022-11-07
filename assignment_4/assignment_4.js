const prompt = require('prompt-sync')();
console.log("===== Input Commuting Costs =====");
let cost = prompt("What is your daily round trip? ");
let days = prompt("How many days per month do you commute? ");
let parking = prompt("How much do you pay for parking per month? ");

const ppm = 0.8236
let monthly = (parseFloat(cost) * ppm) * days + parseFloat(parking);
console.log("===== Cost of Commuting =====");
console.log("Your estimated monthly cost of commuting is $" + parseFloat(monthly).toFixed(2));
console.log("Your estimated yearly cost of commuting is $" + parseFloat(monthly * 12).toFixed(2));