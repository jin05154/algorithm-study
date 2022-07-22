const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const result = [];

const len = array.shift();
const type = {
  pop: () => result.push(stack.pop() || -1),
  size: () => result.push(stack.length),
  empty: () => result.push(stack[0] ? 0 : 1),
  top: () => result.push(stack[stack.length - 1] || -1),
};

for (let i = 0; i < len; i++) {
  if (array[i].includes("push")) {
    stack.push(array[i].split(" ")[1]);
  } else {
    type[array[i]]();
  }
}

console.log(result.join("\n"));
