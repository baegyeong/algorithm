const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const hear = new Set();
const see = new Set();

for (let i = 1; i <= N; i++) {
  hear.add(input[i]);
}

for (let i = N + 1; i <= N + M; i++) {
  see.add(input[i]);
}

const answer = [];

hear.forEach((el) => {
  if (see.has(el)) answer.push(el);
});

console.log(answer.length + "\n" + answer.sort().join("\n"));
