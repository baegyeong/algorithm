var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().split("\n");
var cases = Number(inputs[0]);
inputs.shift();
for (var num = 0; num < cases; num++) {
  var count = Number(inputs[3 * num]);
  var up = inputs[3 * num + 1].split(" ").map((v) => Number(v));
  var down = inputs[3 * num + 2].split(" ").map((v) => Number(v));
  var dp = [[0, up[0], down[0]]];
  for (var i = 1; i < count; i++) {
    dp[i] = [
      Math.max(...dp[i - 1]),
      Math.max(dp[i - 1][0], dp[i - 1][2]) + up[i],
      Math.max(dp[i - 1][0], dp[i - 1][1]) + down[i],
    ];
  }
  console.log(Math.max(...dp[count - 1]));
}
