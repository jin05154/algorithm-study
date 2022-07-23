const n = +require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = [];
function recursive(nums, permutation) {
  if (nums === "") answer.push(permutation.split("").join(" "));
  else {
    for (let i = 0; i < nums.length; i++) {
      f(nums.slice(0, i) + nums.slice(i + 1), permutation + nums[i]);
    }
  }
}
let nums = "";
for (let i = 1; i <= n; i++) nums += i;

recursive(nums, "");
console.log(answer.join("\n"));
