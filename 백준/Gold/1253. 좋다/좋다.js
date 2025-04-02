const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let count = 0;

for (let i = 0; i < N; i++) {
  const sum = arr[i];

  let start = 0;
  let end = N - 1;

  while (start < end) {
    if (arr[start] + arr[end] === sum) {
      if (start === i) start += 1;
      else if (end === i) end -= 1;
      else {
        count++;
        break;
      }
    } else if (arr[start] + arr[end] > sum) {
      end -= 1;
    } else if (arr[start] + arr[end] < sum) {
      start += 1;
    }
  }
}

console.log(count);
