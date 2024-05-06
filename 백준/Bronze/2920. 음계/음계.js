const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let ascending = true;
let descending = true;
for (let i = 0; i < 8; i++) {
  if (i + 1 !== input[i]) {
    ascending = false;
  }
  if (i + 1 !== input[7 - i]) {
    descending = false;
  }
}

if (ascending) console.log("ascending");
else if (descending) console.log("descending");
else console.log("mixed");
