// 3 boolean operators
// ||, &&, !

// if i got an A+ on my test, then I'm allowed to play
// OR
// if i did all my homework AND already practiced piano
let testGrade = 100;
const A_PLUS = 96;
let didMyHomework = true;
let practicedPiano = true;

// 100 >= 96 || true && true
// trueA || trueB && trueC
// trueA || true
// true
let canGoPlay = testGrade >= A_PLUS
  || didMyHomework && practicedPiano;
console.log("Can I go play?");
if (canGoPlay) {
  console.log("yes");
} else {
  console.log("no");
}

// testGrade >= A_PLUS || didMyHomework && practicedPiano
testGrade = 95;
didMyHomework = false;
practicedPiano = true;


// 95 >= 96 || false && true
// false || false && true
// false || false
// false
canGoPlay = testGrade >= A_PLUS
  || didMyHomework && practicedPiano;
console.log("Can I go play?");
if (canGoPlay) {
  console.log("yes");
} else {
  console.log("no");
}
