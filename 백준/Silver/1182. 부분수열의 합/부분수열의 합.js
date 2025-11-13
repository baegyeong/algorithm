const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;

function func(index, currentSum) {
  if (index === N) return;

  currentSum += arr[index];
  if (currentSum === S) result++;

  func(index + 1, currentSum);
  func(index + 1, currentSum - arr[index]);
}

func(0, 0);
console.log(result);
