const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0].split("");
let b = input[1].split("");

d = Array.from(Array(2000), () => Array());

for (let i = 0; i <= a.length; i++) {
  for (let j = 0; j <= b.length; j++) {
    d[i][j] = 0;
  }
}
for (let i = 1; i <= a.length; i++) {
  for (let j = 1; j <= b.length; j++) {
    if (a[i - 1] === b[j - 1]) {
      d[i][j] = d[i - 1][j - 1] + 1;
    } else {
      d[i][j] = Math.max(d[i][j - 1], d[i - 1][j]);
    }
  }
}

console.log(d[a.length][b.length]);
