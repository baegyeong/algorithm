const N = BigInt(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

const MOD = 987654321n;

const n = Number(N / 2n);

const dp = Array(n + 1).fill(0n);
dp[0] = 1n;
if (n >= 1) dp[1] = 1n;

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    dp[i] = (dp[i] + (dp[j] * dp[i - 1 - j]) % MOD) % MOD;
  }
}

console.log(dp[n].toString());