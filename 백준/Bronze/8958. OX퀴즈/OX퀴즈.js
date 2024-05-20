const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let temp = input[i].split("");
  let len = temp.length;
  let result = 0;
  let correct = 0;

  for (let j = 0; j < len; j++) {
    if (temp[j] === "O") {
      correct += 1;
      result += correct;
    } else correct = 0;
  }

  console.log(result);
}
