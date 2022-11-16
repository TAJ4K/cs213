const prompt = require('prompt-sync')();

const tools = [
    {name: "Screw drivers", code: "S", price: 50.00},
    {name: "Wrench", code: "W", price: 4.50},
    {name: "Hammer", code: "H", price: 17.00},
    {name: "Pliers", code: "P", price: 12.95},
    {name: "Ratchet", code: "R", price: 19.95},
    {name: "Ladder", code: "L", price: 19.95},
    {name: "Axe", code: "A", price: 125.75},
    {name: "Chisel", code: "C", price: 13.25}
]
const tax = 0.0625;

// Used for inputs; ensure that the user enters a valid number
const validateNum = (num) => { if(isNaN(num)) { console.log("Invalid input. Please enter a number."); process.exit(); } else { return num; } }

console.log("****** Welcome to Tommy's Tool Selector ******");

console.log("Available Tools:")
// Prints out all the tools available
tools.forEach(tool => {
    console.log(`${tool.code} \t ${tool.name} ${tool.name == "Axe" ? "\t" : ""}\t $${tool.price}`);
})

let numTools = validateNum(prompt("Enter the number of tools you want: "));

// Purchase struct
let purchase = {
    total: 0,
    tools: []
};

// Tool input loop
for (let i = 0; i < numTools; i++) {
    let code = prompt("Enter tool code: ").toLowerCase();
    let qty = validateNum(prompt("How many do you want? "));

    // Find tool in tools array
    for (let j = 0; j < tools.length; j++) {
        if (code == tools[j].code.toLowerCase()) {
            purchase.total += tools[j].price * qty;
            purchase.tools.push({name: tools[j].name, qty: qty, price: tools[j].price});
        }
    }
}

console.log("========= Bill for Tools =========");
console.log("Tool\t\t\tQty\tPrice");

// Prints out the purchased tools, their quantities, and price
purchase.tools.forEach(tool => {
    // Adds a tab if the tool name is less than 8 characters
    console.log(`${tool.name}\t\t${tool.name.length < 8 ? "\t" : ""}${tool.qty}\t$${(tool.price).toFixed(2)}`);
})

// Prints out the running totals and tax
console.log(`Tax\t\t\t\t$${(purchase.total * tax).toFixed(2)}`);
console.log(`Total Price:\t\t\t$${(purchase.total * (1+tax)).toFixed(2)}`);