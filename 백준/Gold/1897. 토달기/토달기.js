const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [d, firstWord] = input.shift().split(" ");

const queue = [firstWord];
const visited = new Set();

const filteredWord = (word, comparedWord) => {
  let i = 0,
    flag = false;

  for (const x of comparedWord) {
    if (x === word[i]) {
      i++;
      continue;
    }

    if (flag) {
      return false;
    }

    flag = true;
  }

  return true;
};

let result = "";

while (queue.length) {
  const word = queue.shift();

  if (result.length < word.length) {
    result = word;
  }

  for (const target of input) {
    if (word === target) continue;
    if (target.length !== word.length + 1) continue;
    if (visited.has(target)) continue;

    const isSuccess = filteredWord(word.split(""), target.split(""));
    if (isSuccess) {
      queue.push(target);
      visited.add(target);
    }
  }
}

console.log(result);
