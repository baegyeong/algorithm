const fs = require("fs");
let input = +fs.readFileSync("/dev/stdin").toString().split("\n")[0];

let result = 0;
while (input > 0) {
  if (input % 5 === 0) {
    input -= 5;
  } else if (input % 3 === 0) {
    input -= 3;
  } else if (input >= 5) {
    input -= 5;
  } else if (input >= 3) {
    input -= 3;
  } else {
    break;
  }
  result++;
}

console.log(input === 0 ? result : -1);
