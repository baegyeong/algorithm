const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
input.shift();
input = input.map((x) => x.split(" ").map(Number));

for (let k = 0; k < num; k++) {
  let [a, b] = input[k];
  let i = a;
  let j = b;

  while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
      i = j;
      j = n;
    }
  }
  console.log((a * b) / j);
}
