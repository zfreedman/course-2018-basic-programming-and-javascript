// print out
// 1 * 1 = 1, 1 * 2 = 2, ..., 1 * 12 = 12
// 2 * 1, 2 * 2, ..., 2 * 12
// ...
// 12 * 1, 12 * 2, ..., 12 * 12

// 1, 2, ..., 12
// 2, 4, ..., 24
// 12, 24, ..., 144

let minVal = 1;
let maxVal = 3;

for(let left = minVal; left <= maxVal; ++left) {
  let result = "";

  for (let right = minVal; right <= maxVal; ++right) {
    result = `${result} ${left * right}`;
  }
  console.log(result);
}
