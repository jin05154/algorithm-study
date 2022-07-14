let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = parseInt(input.shift());
const queue = [];
const answer = [];

const handleQueue = {
  push: (item) => queue.push(item),
  pop: () => {
    return queue.length === 0 ? -1 : queue.shift();
  },
  size: () => {
    return queue.length;
  },
  empty: () => {
    return queue.length === 0 ? 1 : 0;
  },
  front: () => {
    return queue.length === 0 ? -1 : queue[0];
  },
  back: () => {
    return queue.length === 0 ? -1 : queue[queue.length - 1];
  },
};

for (let i = 0; i < n; i++) {
  let cmd = input[i].trim();
  if (cmd.includes("push"))
    handleQueue.push(parseInt(cmd.split(" ")[1]));
  else answer.push(handleQueue[cmd]());
}
console.log(answer.join("\n"));
