const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [men, women] = input.slice(1).map((item) => item.split(" ").map(Number));

const minusMen = men
  .filter((item) => item < 0)
  .map(Math.abs)
  .sort((a, b) => a - b);
const plusWomen = women.filter((item) => item > 0).sort((a, b) => a - b);

const plusMen = men.filter((item) => item > 0).sort((a, b) => a - b);
const minusWomen = women
  .filter((item) => item < 0)
  .map(Math.abs)
  .sort((a, b) => a - b);

let result = 0,
  man = 0,
  woman = 0;

while (man < minusMen.length && woman < plusWomen.length) {
  if (minusMen[man] > plusWomen[woman]) {
    result++;
    man++;
    woman++;
  } else {
    man++;
  }
}

man = 0;
woman = 0;

while (man < plusMen.length && woman < minusWomen.length) {
  if (plusMen[man] < minusWomen[woman]) {
    result++;
    man++;
    woman++;
  } else {
    woman++;
  }
}

console.log(result);
