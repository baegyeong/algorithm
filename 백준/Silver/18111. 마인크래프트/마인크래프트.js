const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, M, B], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const standard = Math.max(...input.flat());
let minTime = Infinity;
let height = 0;

for (let h = standard; h >= 0; h--) {
  let neededBlock = 0;
  let inventory = B;
  let time = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === h) continue;
      const block = Math.abs(input[i][j] - h);
      if (input[i][j] > h) {
        inventory += block;
        time += 2 * block;
      } else {
        neededBlock += block;
        time += block;
      }
    }
  }

  if (neededBlock <= inventory) {
    if (minTime > time) {
      height = h;
      minTime = time;
    }
  }
}

console.log(`${minTime} ${height}`);
