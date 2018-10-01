// print out whether every 7th number between -10 and 40 is even or odd

// check if a number is even or odd based on % 2 value
// (0 for even, 1 odd)

// for loop
for (let i = -10; i <= 40; i += 1) {
  const isEven = i % 2 === 0;

  if (isEven) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
console.log("=======\n\n\n=======");

// while loop
let i = -10;
while (i <= 40) {
  const isEven = i % 2 === 0;

  if (isEven) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }

  i += 7;
}
