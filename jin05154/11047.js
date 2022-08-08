const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
let [n, money] = input.shift().split(" ").map(Number);
const coins = input.map(Number);

let count = 0;
for (let i = n - 1; i >= 0; i--) {
  count += parseInt(money / coins[i]);
  money %= coins[i];
}

// A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수

console.log(count)