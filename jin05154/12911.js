function convertBinary(n) {
  if (n <= 1) return String(n);
  return convertBinary(Math.floor(n / 2)) + String(n % 2);
}

function convertDecimal(binary) {
  let decimal = 0;
  [...binary].forEach((bi, i) => {
    decimal += bi * Math.pow(2, binary.length - i - 1);
  });
  return decimal;
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

// 처음엔 문제 입출력 예시 따라서 경우 나눠서 계산해야하는 줄 알았음
// if (!binaryN.includes("0")) {
//   miniMax = "10" + binaryN.slice(1);
//   answer = convertDecimal(miniMax);
// } else {
// }