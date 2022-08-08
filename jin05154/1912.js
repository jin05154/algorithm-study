const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
const n = Number(input.shift());
const nums = input[0].split(' ').map(Number);

let sum = new Array(n);
let max = nums[0];
sum[0] = nums[0];

for (let i = 1; i < n; i++) {
  sum[i] = nums[i];
  if (sum[i] < sum[i - 1] + nums[i]) sum[i] = sum[i - 1] + nums[i];
  if (sum[i] > max) max = sum[i];
}

console.log(max);
