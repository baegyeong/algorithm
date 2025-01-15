const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, game] = input[0].split(" ");
input.shift();

const people = new Set(input.slice(0, +N));

if (game === "Y") {
  console.log(people.size);
}
if (game === "F") {
  console.log(Math.floor(people.size / 2));
}
if (game === "O") {
  console.log(Math.floor(people.size / 3));
}
