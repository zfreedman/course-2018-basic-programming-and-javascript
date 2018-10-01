/*
  zach has a lot of chocolate, and he wants to give it
  all away to his friends. zach has 9 chocolate bars,
  and he is going to give 2 chocolate bars to every friend
  UNTIL i can't give 2 chocolate bars anymore, because there
  are less than 2 chocolate bars left. zach will keep
  the left over chocolate bars for saturday, which is a day
  he likes to eat chocolate on. it's national chocolate day
*/
const totalChocolateBars = 9;
const chocolateBarsPerFriend = 2;
const leftOverChocolateBars = 9 % 2;

// f1, f2, f3, f4, f5, f6, f7 = 7 friends
// nine chocolate bars, distribute 2 chocolate bars from L to R
// (9 bars left)
// f1 => 2 bars (7 bars left)
// f2 => 2 bars (5 bars left)
// f3 => 2 bars (3 bars left)
// f4 => 2 bars (1 bar left)

// f5, f6, f7 getting no chocolates today because i have < 2
// chocolate bars left over

// zach gets 1 chocolate bar

console.log(`
zach has a lot of chocolate, and he wants to give it
all away to his friends. zach has 9 chocolate bars,
and he is going to give 2 chocolate bars to every friend
UNTIL he can't give 2 chocolate bars anymore, because there
are less than 2 chocolate bars left. zach will keep
the left over chocolate bars for saturday, which is a day
he likes to eat chocolate on. it's national chocolate day
`);

console.log("totalChocolateBars: " + totalChocolateBars);
console.log('chocolateBarsPerFriend: ' + chocolateBarsPerFriend);
console.log(`chocolate for zach: ${leftOverChocolateBars}`);
