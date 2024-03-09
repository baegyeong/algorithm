const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.shift();

let meeting = input
  .map((x) => x.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let answer = 0;
let et = 0;
meeting.forEach((x) => {
  if (x[0] >= et) {
    answer++;
    et = x[1];
  }
});

console.log(answer);
