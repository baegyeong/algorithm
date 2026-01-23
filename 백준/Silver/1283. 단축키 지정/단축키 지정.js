const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const START = 65;
const alphabet = Array(26).fill(false);
let answer = "";

const findIndex = (x) => x.toUpperCase().charCodeAt() - START;

for (const option of input) {
  let result = option;
  let flag = false;

  const words = option.split(" ");
  let cursor = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length === 0) {
      cursor += 1;
      continue;
    }

    const index = findIndex(word[0]);

    if (!alphabet[index] && !flag) {
      flag = true;
      alphabet[index] = true;
      result =
        option.substring(0, cursor) +
        "[" +
        option[cursor] +
        "]" +
        option.substring(cursor + 1);
      break;
    }

    cursor += word.length + 1;
  }

  if (!flag) {
    for (let i = 0; i < option.length; i++) {
      if (option[i] === " ") continue;

      const index = findIndex(option[i]);
      if (alphabet[index]) continue;

      alphabet[index] = true;
      result =
        option.substring(0, i) +
        "[" +
        option[i] +
        "]" +
        option.substring(i + 1);
      break;
    }
  }

  answer += result + "\n";
}

console.log(answer);
