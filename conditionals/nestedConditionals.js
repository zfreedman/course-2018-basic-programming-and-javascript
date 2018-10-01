// a security system needs 1 of 2 types
// of passwords in order to allow access
// into a home (NOTE EITHER IS OK)

// the first password is just a single phrase,
// and ANY phrase is valid UNLESS it has
// a ? in it

// the second password is actually a 2 part password
// the first phrase in the second password MUST NOT
// start with an a or A, and the second phrase MUST
// contain the # sign

const pass1 = "anything?";
const pass2Part1 = "nything else";
const pass2Part2 = "some other!thing";

let allowed = false;

// check first password with indexOf
if (pass1.indexOf("?") === -1) {
  allowed = true;
} else {

  // check second password, part 1
  let firstChar = pass2Part1[0];
  if (!(firstChar === "a" || firstChar.includes("A"))) {

    // check second password, part2
    if (pass2Part2.includes("#")) {
      allowed = true;
    }
  }
}

console.log(`allowed: ${allowed}`);
