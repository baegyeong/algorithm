const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .toUpperCase();

let count = [];
input = input.split("");

let set = new Set(input);
let notDuplicate = Array.from(set);
for (let i of notDuplicate) {
  count.push(input.filter((x) => x === i).length);
}

const max = Math.max(...count);
const maxIdx = count.indexOf(max);
const answer =
  count.filter((x) => x === max).length > 1 ? "?" : notDuplicate[maxIdx];

console.log(answer);
