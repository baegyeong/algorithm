const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, C], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const numberCount = new Map();

for (const x of input) {
  numberCount.set(x, (numberCount.get(x) ?? 0) + 1);
}

const sortedMap = new Map([...numberCount].sort((a, b) => b[1] - a[1]));
let answer = [];

for (const [num, count] of sortedMap) {
  answer.push(...Array(count).fill(num));
}

console.log(answer.join(" "));
