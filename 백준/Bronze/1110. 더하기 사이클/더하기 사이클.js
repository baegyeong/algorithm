const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .padStart(2, "0");

let count = 0;
let result = -1;

let value = input;

while (+input !== +result) {
  const [a, b] = value.split("");
  result = +a + +b;
  result = b + (result % 10);
  value = result;

  count++;
}

console.log(count);
