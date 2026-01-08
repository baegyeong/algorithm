const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const TOTAL_COGWHEEL = 4;
const cogwheel = input
  .slice(0, TOTAL_COGWHEEL)
  .map((line) => line.split("").map(Number));
const K = +input[4];
const arr = input.slice(5).map((line) => line.split(" ").map(Number));

const direction = Array(TOTAL_COGWHEEL).fill(0);
const score = [1, 2, 4, 8];

for (let [num, rotate] of arr) {
  num = num - 1;
  direction[num] = rotate;

  // 왼쪽
  let target = num;
  while (target >= 1) {
    if (direction[target] === 0) {
      direction[target - 1] = 0;
    } else if (cogwheel[target][6] !== cogwheel[target - 1][2]) {
      direction[target - 1] = -direction[target];
    }
    target--;
  }

  target = num;
  while (target <= 2) {
    if (direction[target] === 0) {
      direction[target + 1] = 0;
    } else if (cogwheel[target][2] !== cogwheel[target + 1][6]) {
      direction[target + 1] = -direction[target];
    }
    target++;
  }

  for (let i = 0; i < TOTAL_COGWHEEL; i++) {
    if (direction[i] === -1) {
      const x = cogwheel[i].shift();
      cogwheel[i].push(x);
    }
    if (direction[i] === 1) {
      const x = cogwheel[i].pop();
      cogwheel[i].unshift(x);
    }
  }

  direction.fill(0);
}

let answer = 0;
for (let i = 0; i < TOTAL_COGWHEEL; i++) {
  const wheel = cogwheel[i];
  if (wheel[0] === 1) {
    answer += score[i];
  }
}

console.log(answer);
