const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < N; i++) {
  const arr = Array.from({ length: input[i] }, (_, idx) => idx + 1);
  let answer = [];

  function dfs(index, sum, last, operator) {
    if (index === arr.length - 1) {
      if (sum + last === 0) {
        let result = "";
        for (let i = 0; i < arr.length; i++) {
          result += arr[i];
          if (i < arr.length - 1) {
            result += operator[i];
          }
        }
        answer.push(result);
      }
      return;
    }

    const next = arr[index + 1];

    operator.push("+");
    dfs(index + 1, sum + last, next, operator);
    operator.pop();

    operator.push("-");
    dfs(index + 1, sum + last, -next, operator);
    operator.pop();

    operator.push(" ");
    const newLast = last >= 0 ? last * 10 + next : last * 10 - next;
    dfs(index + 1, sum, newLast, operator);
    operator.pop();
  }

  dfs(0, 0, arr[0], []);

  console.log(answer.sort().join("\n") + "\n");
}
