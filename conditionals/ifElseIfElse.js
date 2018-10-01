// if statement

// else if statement
// else if statement
// else if statement

// else statmenet

// WE VENTURE INTO THE ARCTIC OCEAN BOISSSS AND GIRLSSSS
const FULL = 1;// 1 person will die
const NOT_HUNGRY = 2;// 5 will die
const HUNGRY = 3;// 20 will die
const STARVING = 4;// all crew shall perish to the great white crab
let crewHungerLevel = 5;

if (crewHungerLevel === FULL) {
  console.log("only 1 sailor will perish this year");
} else if (crewHungerLevel === NOT_HUNGRY) {
  console.log("they aren't hungry now, but expect 5 to die");
} else if (crewHungerLevel === HUNGRY) {
  console.log("the crew is in for a rough trip. 20 of them will die");
} else if (crewHungerLevel === STARVING) {
  console.log("all crew will feed themselves to the great white crab");
} else {
  console.log("this hunger level does not compute");
}
