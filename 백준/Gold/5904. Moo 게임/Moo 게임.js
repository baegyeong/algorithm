const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

const arr = ["m", "o", "o"];
function recursion(n, k, len) {
  const a_len = len * 2 + k + 3;
  if (n <= 3) {
    console.log(arr[n - 1]);
    return;
  }

  if (a_len < n) {
    recursion(n, k + 1, a_len);
  } else {
    if (n > len && n <= len + k + 3) {
      if (n - len != 1) {
        console.log("o");
      } else {
        console.log("m");
      }
      return;
    } else {
      recursion(n - (len + k + 3), 1, 3);
    }
  }
}

recursion(input, 1, 3);