const fs = require("fs");
let [N, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.map((item) => [...item].reverse());

const map = {};
for (const word of arr) {
  for (let i = 0; i < word.length; i++) {
    if (!map[word[i]]) {
      map[word[i]] = 0;
    }
    map[word[i]] += Math.pow(10, i);
  }
}

const alphabet = Object.fromEntries(
  Object.entries(map).sort((a, b) => b[1] - a[1])
);

let num = 9;

for (const [key, value] of Object.entries(alphabet)) {
  alphabet[key] = value * num--;
}

console.log(Object.values(alphabet).reduce((a, b) => a + b, 0));
