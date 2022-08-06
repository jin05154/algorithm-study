const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const cnt = Number(array.shift());
const numList = array.map((a) => +a);

const sum = [numList[0]];
let index = 0;
for (let i = 1; i < cnt; i++) {
  sum[i] =
    numList[i] + sum[i - 1] > numList[i] ? numList[i] + sum[i - 1] : numList[i];
}

console.log(Math.max(...sum));
