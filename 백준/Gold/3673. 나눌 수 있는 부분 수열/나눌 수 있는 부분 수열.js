const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [T, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

for (let i = 0; i < T; i++) {
  const [d, n] = input[i * 2];
  const arr = input[i * 2 + 1];

  let answer = 0;
  let prefix = 0;

  const count = Array(d).fill(0);
  count[0] = 1;

  for (let j = 0; j < n; j++) {
    prefix += arr[j];

    const mod = prefix % d;
    answer += count[mod];
    count[mod]++;
  }

  console.log(answer);
}
