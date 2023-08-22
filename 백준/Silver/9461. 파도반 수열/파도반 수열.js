const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

d = new Array(100).fill(0);
d[1] = 1;
d[2] = 1;
d[3] = 1;

for (let i = 4; i <= 100; i++) {
  d[i] = d[i - 2] + d[i - 3];
}

let answer = "";
for (let i = 1; i <= num; i++) {
  answer += d[Number(input[i])] + "\n";
}

console.log(answer);
