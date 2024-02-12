const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

const num = Number(input[0]);

let queue = [];
for (let i = 1; i <= num; i++) {
  queue.push(input[i]);
}

let count = 0;
let j = num + 1;
let k = 0;
while (j !== 2 * num + 1) {
  if (queue[k] === input[j]) {
    j++;
    k++;
  } else {
    const idx = queue.indexOf(input[j]);
    queue.splice(idx, 1);
    count += 1;
    j++;
  }
}

console.log(count);
