// i want to go steal people's stuff from their bags in the mall
// ...which just so happen to be JavaScript arrays

// when i steal there stuff, i want to take something, like
// a cell phone, and replace it with a mango of similar size,
// because i sell mangoes and you work with what you gots to
// work with

// write a JavaScript program that takes an array of something
// like
// ["cellphone", "wallet", "puppy", "gaming mouse"]
// and turns the contents of the array into
// [
//  "mango sized cellphone", "mango sized wallet",
//  "mango sized puppy", "mango sized gaming mouse"
// ]

// solution
// so i have an array of things that all happen to be strings..
// and it seems like everything in the array just gets
// "mango sized" prepended to the start of the string
let arr = ["cellphone", "wallet", "puppy", "gaming mouse"];
console.log("array before");
console.log(arr);

for (let i = 0; i < arr.length; ++i) {
  arr[i] = arr[i] + " sized mango";
}
console.log("array after");
console.log(arr);

// this solution was incomplete because we werent actually
// taking the items for ourselves, we just replaced them
console.log("\n\n\nROUND 2\n\n\n");
let strangerBag = ["cellphone", "wallet", "puppy", "mouse"];
let myBag = [];

for (let i = 0; i < arr.length; ++i) {
  myBag.push(strangerBag[i]);
  strangerBag[i] = strangerBag[i] + " sized mango";
  console.log("\niteration " + i + "...");
  console.log(strangerBag);
  console.log(myBag);
}

