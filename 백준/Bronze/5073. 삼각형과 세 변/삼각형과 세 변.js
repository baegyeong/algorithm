const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const checkTriangle = (a, b, c) => {
  const max = Math.max(a, b, c);
  const sum = a + b + c;
  if (sum - max <= max) {
    return false;
  }
  return true;
};

let i = 0;
let answer = "";

while (true) {
  const [a, b, c] = input[i].split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) break;
  if (!checkTriangle(a, b, c)) answer += "Invalid\n";
  else if (a === b && b === c && a === c) {
    answer += "Equilateral\n";
  } else if (a !== b && b !== c && a !== c) {
    answer += "Scalene\n";
  } else if (a === b || b === c || a === c) {
    answer += "Isosceles\n";
  } else {
    answer += "Invalid\n";
  }

  i++;
}

console.log(answer);
