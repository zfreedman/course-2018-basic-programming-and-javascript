// suppose i have a lot o wizards and i want to be able to
// display information about each wizard
// harry, age 26, uses fire magic and loves hot pockets
// elizabeth, age 16, uses ice magic and loves ice cream
// lilah, age 22, uses dark magic and loves chocolate
// willow, age 1000, uses nature magic and loves broccoli

// first task is to get each wizard into the wizards array
const wizards = [
  ["harry", "fire", "hot pockets"],
  ["elizabeth", "ice", "ice cream"],
  ["lilah", "dark", "chocolate"],
  ["willow", "nature", "broccoli"],
];

console.log(wizards);

// suppose we need to add the ages to the wizards array now
console.log("\nADDING AGES\n");
const ages = [26, 16, 22, 1000];
for (let ageIndex = 0; ageIndex < ages.length; ++ageIndex) {
  wizards[ageIndex].splice(1, 0, ages[ageIndex]);
}
console.log(wizards);

// output the information about each wizard
let wizardIndex = 0;
console.log("\nDESCRIBING WIZARDS\n");
while (wizardIndex < wizards.length) {
  // harry, age 26, uses fire magic and loves hot pockets
  let wiz = wizards[wizardIndex];
  
  let name = wiz[0];
  let age = wiz[1];
  let magicType = wiz[2];
  let favoriteFood = wiz[3];

  console.log(
    `${name}, age ${age}, uses ${magicType} magic `
      + `and loves ${favoriteFood}`
  );

  wizardIndex++;
}
