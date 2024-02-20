const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let range = 1,
  block = 1;

while (block < input) {
  block += 6 * range;

  range++;
}

console.log(range);
