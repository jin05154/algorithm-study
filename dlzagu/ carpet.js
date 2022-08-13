function solution(brown, yellow) {
  var answer = [];
  var widthHeightSum = (brown - 4) / 2; // yellow 넓이의 가로세로 합
  for (let i = 1; i <= yellow; i++) {
    let height = i;
    let width = yellow / i;
    if (yellow % height === 0) {
      // 넓이에 나누어떨어지는 세로 값 찾기
      if (height + width === widthHeightSum) {
        // 가로 세로 값이 같으면
        answer.push(yellow / i + 2); // 가로값에 2 추가 -> brow이 yellow 보다 가로 세로 2씩 길기 떄문
        answer.push(i + 2); // 세로값에 2추가
        break;
      }
    }
  }

  return answer;
}
