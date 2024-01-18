const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r\n/g, "\n")
  .trim()
  .split("\n");

const resistance = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const sum =
  resistance.indexOf(input[0]).toString() +
  resistance.indexOf(input[1]).toString();
const result = Number(sum) * Math.pow(10, resistance.indexOf(input[2]));

console.log(result);
