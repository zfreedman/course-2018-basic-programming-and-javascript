// there's a secret message in these
// strings:

// "cats" "aloe" "pies" "dabs" "arks"

// decode the secret message and print
// it out in 1 line by
// 1) referencing the 2nd character of each string
// and then
// 2) referencing the same character
// using the string's .length property

// 1)
console.log("cats"[1] + "aloe"[1] + "pies"[1] + "dabs"[1] + "arks"[1]);

// 2)
console.log(
  "cats"["cats".length - 3] + "aloe"["aloe".length - 3]
    + "pies"["pies".length - 3] + "dabs"["dabs".length - 3]
    + "arks"["arks".length - 3]
);
