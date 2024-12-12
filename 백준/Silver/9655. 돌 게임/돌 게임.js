const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = +input[0];
let count = 0;
while (N > 0) {
  if (N > 3) {
    N -= 3;
    count++;
    continue;
  }
  N -= 1;
  count++;
}

count % 2 === 0 ? console.log("CY") : console.log("SK");
