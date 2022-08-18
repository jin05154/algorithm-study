function solution(maps) {
  const dx = [0, 0, -1, 1]; // 상 하 좌 우
  const dy = [1, -1, 0, 0]; // 상 하 좌 우
  const col = maps[0].length - 1; // 열
  const row = maps.length - 1; // 행
  let placeAndCnt = [[0, 0, 1]]; // 현위치와 칸 수

  while (placeAndCnt.length) {
    let copy = placeAndCnt.shift();
    if (copy[0] == row && copy[1] == col)
      // 도착지점이면 종료
      return copy[2];
    for (let i = 0; i < 4; i++) {
      let xx = copy[1] + dx[i];
      let yy = copy[0] + dy[i];
      if (xx >= 0 && yy >= 0 && xx <= col && yy <= row && maps[yy][xx] == 1) {
        placeAndCnt.push([yy, xx, copy[2] + 1]);
        maps[yy][xx] = 0; // 밟은 자리는 다시지나가지 않게 0으로 바꾸기
      }
    }
  }
  return -1;
}
