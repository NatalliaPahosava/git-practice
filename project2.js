console.log('****  Welcome to Node CLI Calculator App   ****')
console.log('***********************************************')

const prompt = require('prompt-sync')()
let name = prompt("What's your name?")
console.log('Hello ' + name + ' !!!!')

function doAddNumber(x, y) {
  return x + y
}

function doSubstractionNumber(x, y) {
  return x - y
}

function doMultiplyNumber(x, y) {
  return x * y
}

function doDivisionNumber(x, y) {
  return x / y
}
for( let count=1; count>0 ;){ 
let doSomeAction = prompt('Addition, Subtraction, Multiply, Division ')
doAction=doSomeAction.toLowerCase()
let firstNumber = prompt('What is your first number? ')
let secondNumber = prompt('What is your second number? ')
if (doAction === 'addition') {
  let result = doAddNumber(Number(firstNumber), Number(secondNumber))
  console.log(result)
}
if (doAction === 'substraction') {
  let result = doSubstractionNumber(Number(firstNumber), Number(secondNumber))
  console.log(result)
}
if (doAction === 'multiply') {
  let result = doMultiplyNumber(Number(firstNumber), Number(secondNumber))
  console.log(result)
}
if (doAction === 'division') {
  let result = doDivisionNumber(Number(firstNumber), Number(secondNumber))
  console.log(result)
} 
let askCustomer=prompt('Press 1 if you want to continue, press 0 to stop ')
count=Number(askCustomer)
}



