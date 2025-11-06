const fs = require("fs");
const [N, S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let w = 0,
  wh = 0,
  whe = 0,
  whee = 0;

const MOD = 1000000007;

for (let i = 0; i < +N; i++) {
  if (S[i] === "W") {
    w += 1;
  } else if (S[i] === "H") {
    wh += w;
  } else if (S[i] === "E") {
    whee = whee * 2;
    whee += whe;
    whe += wh;

    whee %= MOD;
  }
}

console.log(whee);
