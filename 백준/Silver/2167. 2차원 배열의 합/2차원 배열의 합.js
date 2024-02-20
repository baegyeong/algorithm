const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.shift();
const arr = input.slice(0, n).map((x) => x.split(" ").map(Number));
const question = input.slice(n + 1).map((x) => x.split(" ").map(Number));

const result = [];

for (let [i, j, x, y] of question) {
  let s = 0;

  for (let k = i; k <= x; k++) {
    for (let l = j; l <= y; l++) {
      s += arr[k - 1][l - 1];
    }
  }
  result.push(s);
}

console.log(result.join("\n"));
