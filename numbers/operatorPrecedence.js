// what operations happen first
console.log(4 + 3 * 2); // 10

// if multiplication and division ONLY
// operations happen from left to right
console.log(8 / 4 * 3); // 6
console.log(3 * 4 / 5); // 12 / 5

// if only addition and subtraction
// operations happen from left to right
console.log(1 - 3 + 4); // 2
console.log(4 + 6 - 7); // 3

// if mult/div and add/sub are mixed,
// do operations from left to right, BUT
// always do mult/div first
console.log(4 - 4 * 2 / 1 + 5);
// 4 - 4 * 2 / 1 + 5
// 4 - 8 / 1 + 5
// 4 - 8 + 5
// -4 + 5
// 1

// exponent operator
// 2 * 2 * 2 * 2 * 2 = 2^5
let twoToTheFifthPower = 2**5;
console.log(twoToTheFifthPower);
// HAPPENS BEFORE MULT/DIV

// operator precedence
// exponents **
// mult/div * /
// add subtr + -
// assignment operator =
