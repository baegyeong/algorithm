const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [M, S] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(":")
  .map(Number);

let totalTime = M * 60 + S;

const buttons = [600, 60, 30, 10];
let answer = 0;
let isStart = false;

while (totalTime > 0) {
  for (const button of buttons) {
    if (totalTime >= button) {
      if (button === 30) {
        isStart = true;
      }

      answer += 1;
      totalTime -= button;
      break;
    }

    if (totalTime === 0) break;
  }
}

console.log(isStart ? answer : answer + 1);
