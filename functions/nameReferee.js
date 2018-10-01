// figure out which name is better based on name length
function nameReferee (nameA, nameB) {
  let winner = null;

  if (nameA.length < nameB.length) {
    winner = nameB;
  } else if (nameA.length > nameB.length) {
    winner = nameA;
  }

  if (winner !== null) {
    return `${winner} is the winner!`;
  }

  return `there was no winner. `
    + `${nameA} and ${nameB} have the same length of ${nameA.length}`;
}

let player1Name = "abe";
let player2Name = "jil";

let gameResult = nameReferee(player2Name, player1Name);
console.log(gameResult);
