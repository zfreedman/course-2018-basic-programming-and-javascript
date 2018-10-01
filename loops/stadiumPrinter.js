// we want to write a program that prints out all characters of a string
// so that one character goes on each line
// we also want to print out the string in order
const spellingString = "hamster";

let characterPointer = 0;

console.log(spellingString);

// loop over string
while (characterPointer < spellingString.length) {
  console.log(
    `pointer: ${characterPointer} `
      + `character: ${spellingString[characterPointer++]}`
  );
}

console.log(spellingString.toUpperCase());
