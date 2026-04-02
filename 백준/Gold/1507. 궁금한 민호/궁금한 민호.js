const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let total = input.flat().reduce((acc, cur) => acc + cur, 0);
const arr = Array.from({ length: N }, () => Array(N).fill(false));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][k] === 0 || input[k][j] === 0 || arr[i][j]) continue;

      if (input[i][j] > input[i][k] + input[k][j]) {
        console.log(-1);
        return;
      }

      if (input[i][j] === input[i][k] + input[k][j]) {
        arr[i][j] = true;
        total -= input[i][j];
      }
    }
  }
}

console.log(total / 2);
