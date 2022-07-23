const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const queue = [];
const result = [];

const len = array.shift();
const type = {
  pop: () => result.push(queue.shift() || -1),
  size: () => result.push(queue.length),
  empty: () => result.push(queue[0] ? 0 : 1),
  front: () => result.push(queue[0] || -1),
  back: () => result.push(queue[queue.length - 1] || -1),
};

for (let i = 0; i < len; i++) {
  if (array[i].includes("push")) {
    queue.push(array[i].split(" ")[1]);
  } else {
    type[array[i]]();
  }
}

console.log(result.join("\n"));
