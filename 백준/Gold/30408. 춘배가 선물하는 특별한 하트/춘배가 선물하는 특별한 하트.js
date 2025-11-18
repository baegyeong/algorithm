const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const search = new Set();

function heart(node) {
  if (search.has(node)) return false;

  search.add(node);

  if (node === M) return true;
  if (node === 1n) return false;

  if (node % 2n === 1n) {
    return heart((node - 1n) / 2n) || heart((node - 1n) / 2n + 1n);
  }

  return heart(node / 2n);
}

console.log(heart(N) ? "YES" : "NO");
