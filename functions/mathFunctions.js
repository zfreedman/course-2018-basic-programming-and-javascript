function squareNumber (number) {
  return number ** 2;
}

function divideNumberBy4 (number) {
  return number / 4;
}

// let's write some tests
let input1 = 5;
console.log(`${input1} squared: ${squareNumber(input1)}`);
let input2 = 128;
console.log(`${input2} divided by 4: ${divideNumberBy4(input2)}`);

function squareNumberAndThenDivideBy4 (number) {
  return divideNumberBy4(squareNumber(number));
}

let input3 = 16;
console.log(
  `${input3} squared and then divided by 4: `
    + `${squareNumberAndThenDivideBy4(input3)}`
);


// javascript substrings (w3 schools, stack overflow)
"ZEbra" // how to get bra, or ZE, or Ebra
// array slice
[1, 2, 3, 4] // how can i get every character excpet the 1st and last
