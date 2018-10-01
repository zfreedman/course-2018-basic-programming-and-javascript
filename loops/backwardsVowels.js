// givne a string, print out all of the vowels in reverse order

// solution should be: aaieuoeoeiii
const vowelString = "iii the vowels should be (?!@#%i!@#%) backwards?";
let i = vowelString.length - 1;

let result = "";

// loop until end of string
while (i > -1) {
  const currChar = vowelString[i];

  if (
      currChar === "a" || currChar === "e" || currChar === "i"
        || currChar === "o" || currChar === "u"
  ) {
    result = result + currChar;
  }

  i -= 1;
}

console.log("all vowels: " + result);
