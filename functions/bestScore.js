function getBestScore (scores) {
  // scores is something like [500, 425, 784, 56]
  // suppose we have a single score scores = [500]
  // how can we find the best score
  let bestScore = null;
  for (let i = 0; i < scores.length; ++i) {
    if (bestScore === null || scores[i] > bestScore) {
      bestScore = scores[i];
    }
  }

  return bestScore;
}

let gameScores = [500, 425, 784, 56];
let bestScore = getBestScore(gameScores);
