const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const [N, K] = input[0].trim().split(" ");
const nums = input[1].trim().split(" ").map(Number);

nums.sort((a, b) => a - b);

console.log(nums[K - 1]);

// 힙정렬 - 틀림 (힙 정렬 구현이 틀린듯)
// 퀵정렬 - 메모리초과