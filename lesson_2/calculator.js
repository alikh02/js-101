// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to Calculator!");

prompt("What's the first number? ");
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num1 = readline.question();
}


prompt("What's the second number? ");
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  num2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = Number(readline.question());

while (![1, 2, 3, 4].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = Number(readline.question());
}
console.log(operation);
let output;
switch (operation) {
  case 1:
    output = Number(num1) + Number(num2);
    break;
  case 2:
    output = Number(num1) - Number(num2);
    break;
  case 3:
    output = Number(num1) * Number(num2);
    break;
  case 4:
    output = Number(num1) / Number(num2);
    break;
}

prompt(`The result is: ${output}`);

