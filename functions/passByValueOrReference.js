let prim = false;
let arr = [1, 2,];

function changeValues (primArg, arrArg) {
  primArg = true;
  arrArg = arrArg.pop();
}

console.log(prim, arr);
changeValues(prim, arr);
console.log(prim, arr);

// false, [1, 2,]
// false, [1,]

