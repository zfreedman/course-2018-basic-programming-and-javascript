// wizard do magic function
const doMagic = (name, magicType) => {
  console.log(`${name} is summoning a ${magicType} ball`);
  console.log("*BOOM BOOM BOOM*");
};

// wizard species
const wizardSpecies = "wizard";

// wizard maker
let makeWizard = (name, magicType) => {
  return {
    species: wizardSpecies,
    name: name,
    magicType: magicType,
    doMagic: doMagic,
  };
};

const wizardObject1 = makeWizard("steve", "ice");
const wizardObject2 = makeWizard("joanna", "explosion");

// make steve throw a fireball the not as good way
console.log(wizardObject1);
console.log(wizardObject2);
// wizardObject1.doMagic(wizardObject2.name, wizardObject2.magicType);
// console.log(
//   "wizards are the same: " + (wizardObject1 === wizardObject2)
// );
console.log(
  "wizard magic functions are the same: "
    + (wizardObject1.doMagic === wizardObject2.doMagic)
);
