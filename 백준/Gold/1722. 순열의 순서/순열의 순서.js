const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const [mode, ...arr] = input[1].split(" ").map((x) => BigInt(x));

const num_arr = new Array(n + 1).fill(false);

let fac = [];
let temp = BigInt(1);
fac.push(1);
for (let i = 1; i <= n; i++) {
  temp *= BigInt(i);
  fac.push(temp);
}

if (mode === 1n) {
  let answer = [];
  let k = BigInt(arr[0]);

  for (let h = 1; h <= n; h++) {
    for (let i = 1; i <= n; i++) {
      if (num_arr[i] === false && k - BigInt(fac[n - h]) <= 0n) {
        num_arr[i] = true;
        answer.push(i);
        break;
      } else if (num_arr[i] === false) {
        k -= fac[n - h];
      }
    }
  }

  console.log(answer.join(" "));
} else {
  let sum = BigInt(1);
  for (let i = 0; i < n; i++) {
    let count = BigInt(0);
    num_arr[arr[i]] = true;
    for (let j = 1; j <= n; j++) {
      if (BigInt(j) === arr[i]) break;
      if (num_arr[j] === false) count = count + 1n;
    }
    sum += BigInt(fac[n - i - 1]) * BigInt(count);
  }
  console.log(Number(sum));
}
