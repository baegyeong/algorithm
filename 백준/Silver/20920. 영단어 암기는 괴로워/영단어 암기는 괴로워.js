const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
input.shift();

let arr = input
  .filter((x) => x.length >= M)
  .sort()
  .sort((a, b) => b.length - a.length);

let words_map = new Map();
for (let x of arr) {
  if (words_map.has(x)) words_map.set(x, words_map.get(x) + 1);
  else words_map.set(x, 1);
}

let sort_arr = [...words_map].sort((a, b) => b[1] - a[1]);

let result = "";
sort_arr.map((x) => (result += x[0] + "\n"));

console.log(result);
