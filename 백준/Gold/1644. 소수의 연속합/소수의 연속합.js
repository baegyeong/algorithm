const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

function primeCount(num) {
  const arr = Array(num + 1).fill(true);
  const prime = [];

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  arr.forEach((v, i) => {
    if (v) prime.push(i);
  });

  return prime;
}

const prime = primeCount(N);
let end = 0,
  total = prime[0],
  count = 0;

for (let i = 0; i < prime.length; i++) {
  while (end < prime.length && total < N) {
    end++;
    if (end !== prime.length) total += prime[end];
  }
  if (end === prime.length) break;
  if (total === N) {
    count++;
    total -= prime[i];
  } else if (total > N) {
    total -= prime[i];
  }
}

console.log(count);
