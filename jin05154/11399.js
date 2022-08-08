const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const n = Number(input.shift());
const time = input[0].split(" ").map(Number);

let wait = new Array(n);

time.sort((a, b) => a - b);

wait[0] = time[0];
if (n > 1) {
  for (let i = 1; i < n; i++) {
    wait[i] = time[i] + wait[i - 1];
  }
}

const total = wait.reduce((sum, a) => sum + a, 0);

console.log(total);
