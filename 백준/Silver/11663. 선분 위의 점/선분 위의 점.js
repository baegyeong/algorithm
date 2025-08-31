const fs = require("fs");
const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const points = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = "";

for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(" ");
  const count =
    upperBound(b, 0, points.length) - lowerBound(a, 0, points.length);
  answer += count + "\n";
}

function lowerBound(target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (points[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function upperBound(target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (points[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

console.log(answer);
