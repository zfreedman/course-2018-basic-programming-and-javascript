/*
  i have some chocolate bars i want to give out
  i'll give out x chocolate bars to each friend until
  < x bars are left in total...and i'm keeping the rest for me =)
*/
const chocolateHolder = "Zach";
const totalChocolateBars = 100;
const chocolateBarsPerFriend = 17;
const leftOverChocolateBars = (
  totalChocolateBars % chocolateBarsPerFriend
);

console.log(`
  ${chocolateHolder} has ${totalChocolateBars} bars and will give out
  ${chocolateBarsPerFriend} bars of chocolate to each of their friends,
  UNTIL < ${chocolateBarsPerFriend} bars are left. ${chocolateHolder}
  will keep the remaining bars for themself.

  Total chocolate bars: ${totalChocolateBars}
  Bars per friend: ${chocolateBarsPerFriend}

  Remaining chocolate bars for ${chocolateHolder}: `
    + `${leftOverChocolateBars}
`);

// how to calculate remainder
/*
  what is 100 % 16 ?
  100 / 16 = 6.25

  THE .25 tells us about the remainder, specifically that
  .25 * 16 IS THE REMAINDER
*/

// trace out problem for 100 chocolate bars, 17 bars per friend
// (100 bars)
// f1 gets 17 => (100 - 17 = 83 left)
// f2 gets 17 => (83 - 17 = 66 left)
// f3 gets 17 => (66 - 17 = 49 left)
// f4 gets 17 => (49 - 17 = 32 left)
// f5 gets 17 => (32 - 17 = 15 left)

// 15 < 17, so we're not giving out anymore chocolate
// ...the remainder is 15

// FUN FACT
// for any number TOP which is LESS THAN a number BOTTOM,
// TOP % BOTTOM = TOP ASLONG AS BOTH ARE POSITIVE
console.log(4 % 7);
console.log(94 % 920);
console.log(1 % 14);
console.log(0 % 85);
