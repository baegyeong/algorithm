let [[N, K], input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let durability = 0;
let step = 0;
let robot = Array(N).fill(false);

const rotatedNext = (i) => (i + 1) % (N * 2);

while (true) {
  step++;

  const rotateBelt = Array(N * 2).fill(0);
  const rotateRobot = Array(N).fill(false);

  for (let i = 0; i < 2 * N; i++) {
    rotateBelt[rotatedNext(i)] = input[i];
  }

  for (let i = N - 1; i > 0; i--) {
    rotateRobot[i] = robot[i - 1];
  }
  rotateRobot[N - 1] = false;

  const movedRobot = [...rotateRobot];
  for (let i = N - 2; i >= 0; i--) {
    if (rotateRobot[i] && !movedRobot[i + 1] && rotateBelt[i + 1] > 0) {
      movedRobot[i] = false;
      movedRobot[i + 1] = true;
      rotateBelt[i + 1]--;

      if (rotateBelt[i + 1] === 0) {
        durability++;
      }
    }
  }
  movedRobot[N - 1] = false;

  if (rotateBelt[0]) {
    movedRobot[0] = true;
    rotateBelt[0]--;
    if (rotateBelt[0] === 0) {
      durability++;
    }
  }

  if (durability >= K) {
    break;
  }

  robot = movedRobot;
  input = rotateBelt;
}

console.log(step);
