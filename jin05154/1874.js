const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, ...nums] = input;
const numbers = nums.map(i => Number(i));
let stack = [];
let count = 1;
let answer = "";

function solution() {
  for (let i = 0; i < n; i++) {
    while (numbers[i] >= count) {
      stack.push(count);
      count += 1;
      answer += "+\n";
    }
  
    if (numbers[i] !== stack.pop()) {
      return "NO";
    } else {
      answer += "-\n";
    }
  }
  return answer;
}

console.log(solution());