const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }

  pow = pow === 0 ? 10 : pow;
  console.log(pow);
}
