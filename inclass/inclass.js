let evencheck = (num) => num % 2 == 0;
evencheck(require('prompt-sync')()("Enter a number: ")) ? console.log("The number you entered is even") : console.log("The number you entered is odd");