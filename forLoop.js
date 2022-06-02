////for loop
function fizBuz() {
  for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizBuzz', i)
    } else if (i % 5 === 0) {
      console.log('Buzz', i)
    } else if (i % 3 === 0) {
      console.log('Fizz', i)
    } else {
      console.log(i)
    }
  }
}
fizBuz()
/////loop on objects(properties) or arrays
const person = { name: 'Jon', lname: 'doe', age: 25 }
for (let x in person){
  ////console.log(x)
}
const numbers=[45,4,9,16,25]

for(let x in numbers){
  console.log(numbers[x])
}
////// for of -> loop on Objects(values )and arrays////

for(let x of numbers){
  console.log(x)
}