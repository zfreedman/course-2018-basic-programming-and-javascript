let letVariable = 15;
const constVariable = "some constant";

console.log("After let/const declaration");
console.log(`letVariable: ${letVariable}`);
console.log(`constVariable: ${constVariable}`);
// console.log(`insideIfVariable: ${insideIfVariable}`);
console.log("=============\n");

// create an if statement
if (true) {
  let scopedVariable = "black";

  console.log("Inside if statement");
  console.log(`letVariable: ${letVariable}`);
  console.log(`constVariable: ${constVariable}`);
  console.log(`scopedVariable: ${scopedVariable}`);
  console.log("=============\n");

  // ...
}

console.log("Outside/After if statement");
console.log(`letVariable: ${letVariable}`);
console.log(`constVariable: ${constVariable}`);
console.log(`scopedVariable: ${scopedVariable}`);
console.log("=============\n");
