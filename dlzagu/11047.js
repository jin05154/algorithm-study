let [nMoney, ...coins] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

let [n, money] = nMoney.split(" ");

coins = coins.map((coin) => +coin); // 동전을 숫자열로 바꾸기
coins.sort((a, b) => b - a); // 동전을 내림차순으로 정리

let cnt = 0;

coins.forEach((coin) => {
  if (coin <= money && money > 0) {
    while (money >= coin) {
      money = money - coin;
      cnt++;
    }
  }
});

console.log(cnt);
