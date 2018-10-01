// forget those friends who think they're so cool because
// they can say the alphabet backwards. i can write a program
// that can do it for me

// first, get the alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// next, convert the string into an array
let alphabetArray = alphabet.split("");
// console.log(alphabetArray, alphabetArray.length);

// now, reverse the array
alphabetArray.reverse();
// console.log(alphabetArray, alphabetArray.length);

// turn back into a string
const reversedAlphabet = alphabetArray.join("");
console.log(reversedAlphabet, reversedAlphabet.length);

// convret to uppercase
console.log(reversedAlphabet.toUpperCase());
