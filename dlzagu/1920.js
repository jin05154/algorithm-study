const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let table = {};

const nList = array[1].split(" ");
const mList = array[3].split(" ");

nList.map((a) => (table[a] = a));
let result = mList.map((a) => (table[a] ? 1 : 0));

console.log(result.join("\n"));
