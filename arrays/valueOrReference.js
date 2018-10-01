// let's talk about strings, booleans, and numbers
let primitive1 = 5;
let primitive2 = primitive1;
console.log(`primitive1 = ${primitive1}`);
console.log(`primitive2 = ${primitive2}`);

// what if we try to update primitive1
console.log("\n======updating primitive1");
primitive1 += 4;
console.log(`primitive1 = ${primitive1}`);
console.log(`primitive2 = ${primitive2}`);

// what if we try to update primitive 2 instead
// console.log("\n======updating primitive2");
// primitive2--;
// console.log(`primitive1 = ${primitive1}`);
// console.log(`primitive2 = ${primitive2}`);

let x = 2;// 2 or false or "hey there"
let y = x;// y gets it's own 2 by looking at the value stored in x
let z = y;// z gets it's own 2 by looking at the value stored in y
