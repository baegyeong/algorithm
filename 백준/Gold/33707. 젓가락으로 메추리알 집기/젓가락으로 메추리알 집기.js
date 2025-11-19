const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readLineOnce() {
  return new Promise((resolve) => {
    rl.once("line", (line) => resolve(line.trim()));
  });
}

function move(query) {
  process.stdout.write(query + "\n");
  return readLineOnce();
}

(async () => {
  const firstLine = await readLineOnce();
  const [N, M] = firstLine.split(" ").map(Number);

  let start = (N * M) & 1;

  for (let i = 1; i <= N; i++) {
    for (let j = 1 + start; j <= M; j += 2) {
      const response = await move(`? ${i} ${j}`);

      if (+response) {
        rl.close();
        return;
      }
    }

    start ^= 1;
  }

  rl.close();
})();
