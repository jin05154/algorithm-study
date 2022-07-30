function convertBinary(n) {
  if (n <= 1) return String(n);
  return convertBinary(Math.floor(n / 2)) + String(n % 2);
}

function solution(n) {
  const binaryN = convertBinary(n);
  const countOne = binaryN.split("1").length;
  var answer = 0;

  while (1) {
    n++;
    if (convertBinary(n).split("1").length === countOne) {
      answer = n;
      break;
    }
  }

  return answer;
}
