const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let list = array[1].split(" ").map((a) => +a);

list.sort((a, b) => a - b);
let sum = 0;

list = list.map((num, i) => {
  num += sum;
  sum += list[i];
  return num;
});

console.log(list.reduce((cur, acc) => cur + acc));
