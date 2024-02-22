const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let arr = Array.from({ length: input }, (_, i) => i + 1);

class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

queue = new Queue();
for (let i = 0; i < input; i++) {
  queue.enqueue(arr[i]);
}

while (queue.getLength() !== 1) {
  queue.dequeue();
  const x = queue.dequeue();
  queue.enqueue(x);
}

console.log(queue.items.pop());