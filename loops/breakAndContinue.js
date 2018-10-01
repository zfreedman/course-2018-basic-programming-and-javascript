// break statements allow us to break out of the
// IMMEDIATE and ONLY THIS IMMEDIATE loop

// counter numbers up to maxNumber, but if we see
// specialNumber, stop
let counter = 0;
const maxNumber = 4;
const specialNumber = 2;

while (counter < maxNumber) {
  console.log(counter);
  counter += 1;

  if (counter === specialNumber) {
    break;
  }
  console.log("whatup i made it");
}
console.log("first loop over\n\n");

// continue lets us skip over THIS iteration of the
// IMMEDIATE and ONLY THIS IMMEDIATE loop
counter = 0;

while (counter < maxNumber) {
  if (counter === specialNumber) {
    counter += 1;
    continue;
  }

  console.log(counter);
  counter += 1;
}
