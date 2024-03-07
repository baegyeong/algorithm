const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split("");

if (!input.includes("0")) {
  console.log("-1");
} else {
  const sum = input.reduce((acc, cur) => acc + parseInt(cur), 0);
  if (sum % 3 !== 0) return console.log("-1");
  const answer = input.sort((a, b) => b - a).join("");

  console.log(answer);
}
