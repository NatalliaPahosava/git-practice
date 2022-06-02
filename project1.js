
const prompt = require("prompt-sync")({ sigint: true });

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });


const nameOfAction = prompt(
  `What do you want to do: Addition, Substraction, Multiply, Division ? `
);
let first = prompt('What do you want your first number to be? ');
let second = prompt('What do you want your second number to be? ');

const x = Number(first);
const y = Number(second);

if (nameOfAction === "Addition") {
  console.log(x + y);
} else if (nameOfAction === "Substraction") {
  console.log(x - y);
} else if (nameOfAction === "Multiply") {
  console.log(x * y);
} else if (nameOfAction === "Division") {
  console.log(x / y);

let repeatAction = prompt(`Would you like to repeat your calculation? Yes/No: `);
repeatAction.toString();
  if (repeatAction === "Yes") {
    console.log(calculator());
  } else {
    console.log("Bye-bye!See you!");
  } 
  calculator()
}

let repeatAction = prompt(`Would you like to repeat your calculation? Yes/No: `);
repeatAction.toString();
if (repeatAction === "Yes") {
  console.log(calculator());
} else {
  console.log("Bye-bye!See you!");
}
