// we used to represent wizards as a big array of information
const oldWizard = ["harry", 26, "fire", "hot pockets"];
console.log(`name: ${oldWizard[0]}`);
console.log(`age: ${oldWizard[1]}`);

// the same kind of array can actually be created by doing this
const oldWizard2 = [];
oldWizard2.push("lilah");
oldWizard2.push("dark");
oldWizard2.push("chocolate");
oldWizard2.unshift(22);
console.log(oldWizard2);

// here's how we can represent one of these wizards with objects
// ["willow", 1000, "nature", "broccoli"]
const newWizard = {};
newWizard.age = 1000;
newWizard["name"] = "willow";
newWizard.magicType = "nature";
newWizard["favoriteFood"] = "broccoli";
console.log(newWizard);
console.log(`newWizard magicType: ${newWizard.magicType}`);
console.log(`newWizard favorite-Food: ${newWizard["favoriteFood"]}`);
