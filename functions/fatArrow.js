// regular function
function colorPrinter0 (color1, color2, color3, color4 = "purple") {
  console.log(`${color1}, ${color2}, ${color3}, ${color4}`);

  return 5;
}
colorPrinter0("red", "blue", "black");

// fat arrow function
let colorPrinter1 = (color1, color2, color3, color4 = "purple") => {
  console.log(`${color1}, ${color2}, ${color3}, ${color4}`);

  return 6;
};
colorPrinter1("green", "cyan", "biscuits");

// single line fat arrows (number1 + number2 is returned)
let oneLineFatArrow = (number1, number2) => number1 + number2;
console.log(oneLineFatArrow(5, 6));

// single argument fat arrow
let add2QuestionMarks = string => string + "??";
console.log(add2QuestionMarks("what"));

// older version of same function on line 22
function add2QuestionMarks2 (string) {
  return string + "??";
}
