let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = parseInt(input.shift());

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    return this.items.length > 0 ? this.items.pop() : -1;
  }
  size() {
    return this.items.length;
  }
  empty() {
    return this.items.length === 0 ? 1 : 0;
  }
  top() {
    return this.items.length > 0 ? this.items[this.items.length - 1] : -1;
  }
}

const stack = new Stack();
const answer = [];

function handleInput(cmd) {
  if (cmd.includes("push")) {
    stack.push(parseInt(cmd.slice(5)));
  } else if (cmd.includes("pop")) {
    answer.push(stack.pop());
  } else if (cmd.includes("size")) {
    answer.push(stack.size());
  } else if (cmd.includes("empty")) {
    answer.push(stack.empty());
  } else if (cmd.includes("top")) {
    answer.push(stack.top());
  }
}

for (let i = 0; i < n; i++) {
  handleInput(input[i]);
}
console.log(answer.join("\n"));
