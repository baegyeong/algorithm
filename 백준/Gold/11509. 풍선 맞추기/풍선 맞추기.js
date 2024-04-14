const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let h = input[1].split(" ").map(Number);
let result = 0;
let arrow = new Array(1000001).fill(0);
for (x of h) {
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    result += 1;
  }
}

console.log(result);
