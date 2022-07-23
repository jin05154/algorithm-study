const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = Number(require("fs").readFileSync(filePath));
const baseArr = Array.from(Array(input), (e, i) => i + 1);

function getPermutations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) return array.map((value) => [value]);

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
}

getPermutations(baseArr, input).forEach((permutation) => {
  let answer = "";
  permutation.forEach((el) => (answer += `${el} `));
  console.log(answer);
});
