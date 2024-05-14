const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);

for (let i = 0; i < testCase; i++) {
  let minTime = 0,
    maxTime = 0;
  const [stick, num] = input[1].split(" ").map(Number);
  let ants = input.splice(2, num).map(Number);
  let mid = parseInt(stick / 2);

  ants = ants.sort((a, b) => a - b);
  for (let ant of ants) {
    minTime = Math.max(minTime, Math.min(ant, stick - ant));
    maxTime = Math.max(maxTime, ant, stick - ant);
  }

  console.log(minTime, maxTime);
  input.shift();
}
