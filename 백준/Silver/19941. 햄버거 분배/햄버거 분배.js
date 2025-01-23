const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const table = input[1].split("");

for (let i = 0; i < N; i++) {
  if (table[i] === "P") {
    for (let j = i - K; j <= i + K; j++) {
      if (j >= 0 && j < N && table[j] === "H") {
        table[j] = "X";
        break;
      }
    }
  }
}

console.log(table.filter((x) => x === "X").length);
