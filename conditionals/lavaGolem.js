// there is a lava golem as the final boss in a video game..
// if you have either a water gun OR a bag of marshmellows, you win

// false || false || false || ... || false || true || false === true
// false || false || false === false
const hasWaterGun = true;
const hasMarshmellows = false;
if (hasWaterGun || hasMarshmellows) {
  console.log("you win");
}
else {
  console.log("psych!!".toUpperCase() + " you lose");
}

console.log("============\n\n\n");

// magma monster is actually harder to beat than her brother lava golem
// if you have ice mittens AND at least 3 pancakes AND
// your name starts with B, you live, otherwise you die

// &&
// true && true && true && ... && false && true === false
// true && true && true === true
const name = "Bob";
const pancakeCount = 3;
const hasIceMittens = true;
if (name[0] === "B" && pancakeCount >= 3 && hasIceMittens) {
  console.log("victory! we have defeated magma monster, the she beast");
}
else {
  console.log("you dead. bye bye");
}
