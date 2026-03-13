const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, M, L, K], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const count = Array(K).fill(K);

for (let i = 0; i < K; i++) {
  const x = input[i][0];

  const temp = Array(K).fill(K);
  for (let j = 0; j < K; j++) {
    const y = input[j][1];

    for (let k = 0; k < K; k++) {
      const [x1, y1] = input[k];
      if (x1 >= x && x1 <= x + L && y1 >= y && y1 <= y + L) {
        temp[j]--;
      }
    }
  }

  count[i] = Math.min(...temp);
}

console.log(Math.min(...count));
