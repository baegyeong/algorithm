const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, G, K] = input[0].split(" ").map(Number);
const ingredient = input.slice(1).map((item) => item.split(" ").map(Number));

let start = 0;
let end = 2 * 10 ** 9;

let date = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let totalGerm = 0;
  const notImportant = [];
  let isOver = false;

  for (const [S, L, O] of ingredient) {
    germ = S * Math.max(1, mid - L);

    if (O === 0) {
      totalGerm += germ;
    } else {
      notImportant.push(germ);
    }

    if (totalGerm > G) {
      isOver = true;
      break;
    }
  }

  if (!isOver) {
    notImportant.sort((a, b) => b - a);
    const sum =
      totalGerm + notImportant.slice(K).reduce((acc, cur) => acc + cur, 0);
    if (sum > G) isOver = true;
  }

  if (isOver) {
    end = mid - 1;
  } else {
    date = mid;
    start = mid + 1;
  }
}

console.log(date);
