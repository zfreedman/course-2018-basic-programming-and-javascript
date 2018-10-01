const numberOfPeople = 74;
let iceCreamFlavor = "vanilla";
let numberOfTeeth = 32;
let undefinedVariable;
let variableWithNoValue = null;
let typeOfTree = "palm";

let funnyTemplate = `One day I saw Zach walking down the street eating `
  + `a ${iceCreamFlavor} ice cream underneath a ${typeOfTree} tree, `
  + `smiling with all ${numberOfTeeth} of his teeth missing. He was `
  + `probably the ugliest child of the ${numberOfPeople} people in his `
  + `family. He told me I'm supposed to declare an undefined variable `
  + `whose value is ${undefinedVariable} and another variable with no `
  + `value, which JavaScript represents as "${variableWithNoValue}."`;

console.log(funnyTemplate);

console.log("\n\n");

iceCreamFlavor = "chocolate";
numberOfTeeth = "10";
typeOfTree = "pine";

funnyTemplate = `One day I saw Zach walking down the street eating `
  + `a ${iceCreamFlavor} ice cream underneath a ${typeOfTree} tree, `
  + `smiling with all ${numberOfTeeth} of his teeth missing. He was `
  + `probably the ugliest child of the ${numberOfPeople} people in his `
  + `family. He told me I'm supposed to declare an undefined variable `
  + `whose value is ${undefinedVariable} and another variable with no `
  + `value, which JavaScript represents as "${variableWithNoValue}."`;

console.log(funnyTemplate);
// print out uppercase
console.log(funnyTemplate.toUpperCase());
// print out lowercase
console.log(funnyTemplate.toLowerCase());
