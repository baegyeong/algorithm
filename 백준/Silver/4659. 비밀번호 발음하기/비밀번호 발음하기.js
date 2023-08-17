const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";
let arr = ["a", "e", "i", "o", "u"];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "end") break;

  let isAcceptable = true;

  if (!arr.some((el) => input[i].includes(el))) {
    isAcceptable = false;
  }

  for (let j = 0; j < input[i].length - 2; j++) {
    if (
      (arr.includes(input[i][j]) &&
        arr.includes(input[i][j + 1]) &&
        arr.includes(input[i][j + 2])) ||
      (!arr.includes(input[i][j]) &&
        !arr.includes(input[i][j + 1]) &&
        !arr.includes(input[i][j + 2]))
    ) {
      isAcceptable = false;
      break;
    }
  }

  for (let j = 0; j < input[i].length - 1; j++) {
    if (
      input[i][j] === input[i][j + 1] &&
      input[i][j] !== "e" &&
      input[i][j] !== "o"
    ) {
      isAcceptable = false;
      break;
    }
  }

  if (isAcceptable) {
    result += `<${input[i]}> is acceptable.\n`;
  } else {
    result += `<${input[i]}> is not acceptable.\n`;
  }
}

console.log(result);
