const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.shift();

const MAX = Math.max(...input);
const isPrime = Array(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

for (const num of input) {
  for (let i = num / 2; i >= 2; i--) {
    const a = i;
    const b = num - i;
    if (isPrime[a] && isPrime[b]) {
      console.log(a, b);
      break;
    }
  }
}
