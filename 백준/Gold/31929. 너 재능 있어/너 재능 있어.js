const [[N], W, [M], L, [K]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(-100_001));
dp[0][0] = 0;

const totalRound = N + M;

for (let round = 0; round < totalRound; round++) {
  for (let win = 0; win <= round && win <= N; win++) {
    const lose = round - win;
    if (lose > M) continue;

    const cur = dp[win][lose];
    if (cur < -100_000) continue;

    // 이기는 경우
    if (win < N) {
      dp[win + 1][lose] = Math.max(dp[win + 1][lose], cur + W[win]);
    }

    // 지는 경우
    if (lose < M) {
      let b = L[lose];
      const remainder = cur % K;

      if (remainder !== 0) {
        if (cur > 0) {
          b = Math.min(b, remainder);
        } else {
          b = Math.min(b, cur - (Math.trunc(cur / K) - 1) * K);
        }
      }

      dp[win][lose + 1] = Math.max(dp[win][lose + 1], cur - b);
    }
  }
}

console.log(dp[N][M]);
