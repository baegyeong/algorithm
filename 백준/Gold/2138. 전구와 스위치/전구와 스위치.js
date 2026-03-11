const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const initial = input[1].split("").map(Number);
const target = input[2].split("").map(Number);

function toggle(arr, index) {
  for (let i = index - 1; i <= index + 1; i++) {
    if (i >= 0 && i < n) {
      arr[i] = arr[i] === 0 ? 1 : 0;
    }
  }
}

function solution(initial, target, pressFirst) {
  const bulbs = [...initial];
  let count = 0;

  if (pressFirst) {
    toggle(bulbs, 0);
    count++;
  }

  for (let i = 1; i < n; i++) {
    if (bulbs[i - 1] !== target[i - 1]) {
      toggle(bulbs, i);
      count++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (bulbs[i] !== target[i]) {
      return Infinity;
    }
  }

  return count;
}

const answer = Math.min(
  solution(initial, target, true),
  solution(initial, target, false),
);
console.log(answer === Infinity ? -1 : answer);
