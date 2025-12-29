const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(lines[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
  const w = lines[idx++];
  const k = Number(lines[idx++]);

  const pos = {};
  let lenMin = Infinity;
  let lenMax = 0;

  for (let i = 0; i < w.length; i++) {
    if (!pos[w[i]]) pos[w[i]] = [];
    pos[w[i]].push(i);
  }

  for (const c in pos) {
    const arr = pos[c];
    if (arr.length < k) continue;

    for (let i = 0; i <= arr.length - k; i++) {
      const len = arr[i + k - 1] - arr[i] + 1;
      lenMin = Math.min(lenMin, len);
      lenMax = Math.max(lenMax, len);
    }
  }

  if (lenMin === Infinity) console.log(-1);
  else console.log(`${lenMin} ${lenMax}`);
}
