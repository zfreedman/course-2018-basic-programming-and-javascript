const playerNames = ["wizard god", "samurai", "butcher", "ladies man"];

function renamePlayersForFun (names, prefix = "BAD") {
  for (let i = 0; i < names.length; ++i) {
    names[i] = prefix + " " + names[i];
  }
}

console.log("names before: ");
console.log(playerNames);

renamePlayersForFun(playerNames, "uGlY aNd AwFuL");

console.log("names after: ");
console.log(playerNames);
