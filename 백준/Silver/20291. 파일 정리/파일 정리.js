const fs = require("fs");
const [N, ...input] = fs.readFileSync(0, 'utf-8').trim().split("\n");

const extMap = new Map();
for (const item of input) {
  const [name, ext] = item.split(".");
  if (extMap.has(ext)) {
    const count = extMap.get(ext);
    extMap.set(ext, count + 1);
  } else {
    extMap.set(ext, 1);
  }
}

const sorting = [...extMap.entries()].sort(([a], [b]) => a.localeCompare(b));
console.log(sorting.map((x) => x.join(" ")).join("\n"));
