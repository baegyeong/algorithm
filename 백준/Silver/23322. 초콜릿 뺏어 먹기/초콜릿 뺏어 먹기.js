const isLocal = process.platform !== "linux";
const filePath = isLocal ? "input.txt" : "/dev/stdin";

const [[N, K], input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const sortedChocolate = input.sort((a, b) => a - b);

let chocolate = 0;
let day = 0;

const sequence = Array.from({ length: N }, (_, i) => i);

while (true) {
  const target = sequence.find(
    (i) => K - 1 < i && sortedChocolate[i - K] !== sortedChocolate[i],
  );

  if (target === undefined) break;

  chocolate += sortedChocolate[target] - sortedChocolate[target - K];
  sortedChocolate[target] = sortedChocolate[target - K];
  sortedChocolate.sort((a, b) => a - b);
  day++;
}

console.log(chocolate, day);