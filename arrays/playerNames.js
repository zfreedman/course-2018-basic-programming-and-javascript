// arrays let us store multiple values in a singular objet
let playerNames = ["dark lord 64", "magic merlinda 5", "fire girl xxf"];
console.log(playerNames);

// accessing an individual player
console.log(`the second player is: ${playerNames[1]}`);

// change value at specified index
playerNames[playerNames.length - 1] = "zesty zachita";
// playerNames[0] = true;
// playerNames[1] = 17;

console.log(`new player names array: ${playerNames}`);
console.log("length of array: " + playerNames.length);

console.log("======\n\n\nADDING/REMOVING players\n\n\n=====");

// player 1 joins the server
playerNames.push("player 1");
console.log("player 1 joined the server...\n" + playerNames);
console.log("length of array: " + playerNames.length + "\n");

// player 1 leaves the server
let playerWhoLeft = playerNames.pop();
console.log(`${playerWhoLeft} left the server...`);
console.log(playerNames);
console.log("total player count: " + playerNames.length);

// dark lord 64 is hacking, get him off the server
let hacker = playerNames.shift();
console.log(`\nHACKER ${hacker} left the server...`);
console.log(playerNames);
console.log("total player count: " + playerNames.length);

// after 2 years, dark lord 64 has changed their ways, so
// put them back in the server
playerNames.unshift(hacker);
console.log(`\nNOT HACKER ${hacker} has rejoined server...`);
console.log(playerNames);
console.log("total player count: " + playerNames.length);
