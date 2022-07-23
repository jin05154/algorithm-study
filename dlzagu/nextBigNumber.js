function solution(n) {
  var answer = n;
  var cntOfOne = n.toString(2).match(/1/g).length;
  while (true) {
    answer++;
    if (answer.toString(2).match(/1/g).length === cntOfOne) break;
  }

  return answer;
}
