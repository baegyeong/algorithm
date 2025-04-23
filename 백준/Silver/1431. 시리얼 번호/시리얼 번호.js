const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const serials = input.slice(1);

serials.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;

  const sumDigits = (str) =>
    str.split("").reduce((acc, ch) => (/\d/.test(ch) ? acc + +ch : acc), 0);

  const sumA = sumDigits(a);
  const sumB = sumDigits(b);

  if (sumA !== sumB) return sumA - sumB;

  return a.localeCompare(b);
});

console.log(serials.join("\n"));
