const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const getMaxContinuousNum = (numbers) => {
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    const set = new Set([
      numbers[i] + 1,
      numbers[i] + 2,
      numbers[i] + 3,
      numbers[i] + 4,
    ]);
    let cnt = 0;

    for (let j = 0; j < numbers.length; j++) {
      if (set.has(numbers[j])) {
        cnt++;
      }
    }

    max = Math.max(max, cnt);
  }

  return max;
};

const [N, ...numbers] = input.map(Number);
numbers.sort((a, b) => a - b);

console.log(4 - getMaxContinuousNum(numbers));
