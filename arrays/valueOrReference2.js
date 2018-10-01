// assignmnet by value for primitive types
let x = true;
let y = x;

// objects actually assign by reference
let arr1 = [5, 4, 3];
let arr2 = arr1;
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);

// try updating arr1, does it update arr2
const newVal = "?";
console.log(`\npush ${newVal} into arr1...`);
arr1.push(newVal);
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
