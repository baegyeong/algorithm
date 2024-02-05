const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

const num = Number(input[0]);
input.shift();

const stack = [];
let result = "";
input = input.map((x) => x.split(" "));

for (let i = 0; i < num; i++) {
  const [word, number] = input[i];
  if (word === "push") {
    stack.push(+number);
  } else if (word === "pop") {
    const a = stack.pop();
    result += a ? `${a}\n` : "-1\n";
  } else if (word === "size") {
    result += stack.length + "\n";
  } else if (word === "empty") {
    result += stack.length === 0 ? "1\n" : "0\n";
  } else if (word === "top") {
    result += stack.length === 0 ? "-1\n" : `${stack[stack.length - 1]}\n`;
  }
}

console.log(result);
