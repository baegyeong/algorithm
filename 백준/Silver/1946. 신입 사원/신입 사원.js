const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testcase = Number(input[0]);
input.shift();
let answer = "";

for (let i = 0; i < testcase; i++) {
  let arr = [];

  const n = Number(input[0]);

  for (let j = 1; j < n + 1; j++) {
    arr.push(input[j].split(" ").map(Number));
  }

  arr = arr.sort((a, b) => a[0] - b[0]);

  let minValue = 100001;
  let count = 0;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }
  input = input.slice(1 + n);
  answer += count + "\n";
}

console.log(answer);
