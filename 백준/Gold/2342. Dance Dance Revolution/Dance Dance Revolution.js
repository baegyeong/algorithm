const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input.length - 1;

const findPower = (from, to) => {
  if (from === 0) return 2;
  if (from === to) return 1;
  if (Math.abs(from - to) === 2) return 4;
  return 3;
};

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: 5 }, () => Array(5).fill(Infinity)),
);

dp[0][0][0] = 0;

for (let i = 1; i <= N; i++) {
  const next = input[i - 1];

  for (let l = 0; l < 5; l++) {
    for (let r = 0; r < 5; r++) {
      if (dp[i - 1][l][r] === Infinity) continue;

      dp[i][next][r] = Math.min(
        dp[i][next][r],
        dp[i - 1][l][r] + findPower(l, next),
      );

      dp[i][l][next] = Math.min(
        dp[i][l][next],
        dp[i - 1][l][r] + findPower(r, next),
      );
    }
  }
}

let answer = Infinity;

for (let l = 0; l < 5; l++) {
  for (let r = 0; r < 5; r++) {
    answer = Math.min(answer, dp[N][l][r]);
  }
}

console.log(answer);
