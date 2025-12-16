const [[N, HP], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const T = Array(N).fill(0);
let answer = Infinity;

function func(x, time) {
  if (answer < time) {
    return;
  }

  if (x <= 0) {
    answer = Math.min(answer, time);
    return;
  }

  let flag = false;
  for (let i = 0; i < N; i++) {
    if (T[i] <= time) {
      const [C, D] = input[i];
      flag = true;
      let prev = T[i];
      T[i] = time + C;
      func(x - D, time + 1);
      T[i] = prev;
    }
  }

  if (!flag) {
    func(x, time + 1);
  }
}

func(HP, 0);
console.log(answer);
