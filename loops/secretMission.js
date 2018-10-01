// NSA wants us to encrypt a secret message between spies
// suppose the secret message was 012345
// we should turn that message into
// 531024
// 3102

// real string
let realString = "012345 other secret stuff here (i'm a spy)";
// realString = "abcde";
// encrypted string
let encryptedString = "";
// real string character pointer
let realPointer = 0;
// whether to add rightwards or leftwards (right by default)
let addRight = true;

// loop to encrypt entire string
while (realPointer < realString.length) {

  // figure out if adding right or left
  encryptedString = addRight
    ?  encryptedString + realString[realPointer]
    : realString[realPointer] + encryptedString;
  
  // update character pointer
  ++realPointer;
  // flip addRight
  addRight = !addRight;

  // output real string at end of every iteration
  // console.log(encryptedString);
}

console.log(`original message: ${realString}`);
console.log(`encrypted message: ${encryptedString}`);

