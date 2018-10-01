// this is an example of a template string
let animal = "shark";
let favoriteSnack = "peanut butter";

let fakeTemplateString = "Did you know that " + animal +
  "s love to eat " + favoriteSnack + "?!";
let realTemplateString = (
  `Did you know that ${animal}s love to eat ${favoriteSnack}?!`
);

console.log(fakeTemplateString);
console.log(realTemplateString);

animal = "panda";
favoriteSnack = "humans";
realTemplateString = (
  `Did you know that ${animal}s `
    + `love to eat ${favoriteSnack}?!`
);
console.log(realTemplateString);
