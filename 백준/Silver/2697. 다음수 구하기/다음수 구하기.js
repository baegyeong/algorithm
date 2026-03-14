const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [T, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = "";

for (let t = 0; t < +T; t++) {
  const arr = input[t].split("").map(Number);

  let flag = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      let next = Infinity;
      let nextIndex = 0;
      flag = true;

      for (let j = i; j < arr.length; j++) {
        if (arr[i - 1] < arr[j] && arr[j] < next) {
          next = arr[j];
          nextIndex = j;
        }
      }

      [arr[i - 1], arr[nextIndex]] = [arr[nextIndex], arr[i - 1]];
      answer +=
        [...arr.slice(0, i), ...arr.slice(i).sort((a, b) => a - b)].join("") +
        "\n";

      break;
    }
  }

  if (!flag) {
    answer += "BIGGEST\n";
  }
}

console.log(answer);
