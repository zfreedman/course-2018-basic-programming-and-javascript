const monster1 = "giant squid";
const monster2 = "enormous lizard beast thing";
const monster3 = "ferocious hog lord";

// console.log(`warning: ${monster1.toUpperCase()} territory ahead!!`);
// console.log(`warning: ${monster2.toUpperCase()} territory ahead!!`);

function warnAboutMonsters (monsterName = "pepperoni pizza monster") {
  console.log(
    `warning: ${monsterName.toUpperCase()} lives up ahead! be carefu!!`
  );
}

warnAboutMonsters(monster1);
warnAboutMonsters(monster2);
warnAboutMonsters(monster3);

console.log("\n\n\n\n\n");
let functionValue = warnAboutMonsters("bread");
console.log(
  "the funciton value of warnAboutMonsters is: "
    + functionValue
);

console.log("\n\n\n\n\n");
warnAboutMonsters();
warnAboutMonsters("ham hoarder");
