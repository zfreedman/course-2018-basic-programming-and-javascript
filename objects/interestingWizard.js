const doMagicHere = (name, magicType) => {
  console.log(`${name} is summoning a ${magicType} ball`);
  console.log("*BOOM BOOM BOOM*");
};

const wizardSpecies = "wizard";


// lets try and make our wizard objects a little more interesting
const wizardObject1 = {
  species: wizardSpecies,
  name: "steve",
  magicType: "ice",
  doMagic: doMagicHere,
};

// make steve throw a fireball the not as good way
wizardObject1.doMagic(wizardObject1.name, wizardObject1.magicType);

const wizardObject2 = {
  species: wizardSpecies,
  name: "joanna",
  magicType: "fire",
  doMagic: doMagicHere,
};
