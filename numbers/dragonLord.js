// if zach has as many dragons as you or more, he wins
let zDragonCount = 100;
let gDragonCount = 50;

// compare dragons
console.log(
  `zDragonCount(${zDragonCount}) > gDragonCount(${gDragonCount}):
      ${zDragonCount > gDragonCount}`
);

zDragonCount = 75;
gDragonCount = 75;
console.log(
  `zDragonCount(${zDragonCount}) >= gDragonCount(${gDragonCount}):
      ${zDragonCount >= gDragonCount}`
);

zDragonCount = 40;
gDragonCount = 40;
console.log(
  `zDragonCount(${zDragonCount}) <= gDragonCount(${gDragonCount}):
      ${zDragonCount <= gDragonCount}`
);

zDragonCount = 25;
gDragonCount = 400;
console.log(
  `zDragonCount(${zDragonCount}) < gDragonCount(${gDragonCount}):
      ${zDragonCount < gDragonCount}`
);

// false evaluation
console.log(
  `zDragonCount(${zDragonCount}) > gDragonCount(${gDragonCount}):
      ${zDragonCount > gDragonCount}`
);

// equality
console.log(`2 == 2: ${2 == 2}`); // okay, but
console.log(`2 === 2: ${2 === 2}`); // this is preferred

// example of when it breaks
console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);

// NOT equals
console.log(`3 != 4: ${3 != 4}`);
console.log(`3 !== 4: ${3 !== 4}`);
