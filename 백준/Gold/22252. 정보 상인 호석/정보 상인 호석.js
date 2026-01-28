const [[Q], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const gorilla = {};
let answer = 0;

for (const line of input) {
  const info = line.split(" ");

  if (info[0] === "1") {
    const name = info[1];
    const values = info.slice(3).map(Number);

    if (!gorilla[name]) {
      gorilla[name] = { arr: [], idx: 0 };
    }

    if (gorilla[name].idx > 0) {
      gorilla[name].arr = gorilla[name].arr.slice(gorilla[name].idx);
      gorilla[name].idx = 0;
    }

    gorilla[name].arr.push(...values);
  } else {
    const name = info[1];
    let b = Number(info[2]);

    if (!gorilla[name] || gorilla[name].arr.length === 0) continue;

    gorilla[name].arr.sort((a, b) => b - a);

    while (b-- > 0 && gorilla[name].idx < gorilla[name].arr.length) {
      answer += gorilla[name].arr[gorilla[name].idx++];
    }
  }
}

console.log(answer);
