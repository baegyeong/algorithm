const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

let min = -1;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const x = cards[i] + cards[j] + cards[k];
      if (x <= m) {
        min = Math.max(x, min);
      }
    }
  }
}

console.log(min);
