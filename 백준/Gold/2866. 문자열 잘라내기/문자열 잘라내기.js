const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [R, C] = input.shift().split(" ").map(Number);

const cols = Array.from({ length: C }, () => "");

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    cols[j] += input[i][j];
  }
}

const check = (k) => {
  const wordSet = new Set();

  for (let j = 0; j < C; j++) {
    const sub = cols[j].slice(k);

    if (wordSet.has(sub)) return false;
    wordSet.add(sub);
  }

  return true;
};

let left = 0,
  right = R - 1;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (check(mid)) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
