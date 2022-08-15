const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const num = Number(input.shift());
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
function bfs(startY, startX) {
  //시작 좌표 기준으로 시작
  const queue = [[startY, startX]];
  // queue가 비워지면 탈출
  while (queue.length) {
    const [y, x] = queue.shift();
    // queue의 값을 하나씩 빼서 xy로 저장
    // xy좌표가 0 이면 다시, 1이면 0으로 만들어준다.
    // 인접한 1들 다 0으로 만들기
    if (!map[y][x]) return;
    map[y][x] = 0;

    // 상하좌우 탐색하여 1이 있다면 queue에 push 해준다.
    for (let i = 0; i < 4; i++) {
      const yy = y + ds[i][0];
      const xx = x + ds[i][1];

      if (xx < 0 || yy < 0 || xx >= M || yy >= N) return;
      if (map[yy][xx]) queue.push([yy, xx]);
    }
  }
}
for (let i = 0; i < num; i++) {
  let cnt = 0;
  var [M, N, K] = input.shift().split(" ").map(Number);
  var map = Array.from(Array(N), () => new Array(M).fill(0));
  for (let i = 0; i < K; i++) {
    let [x, y] = input.shift().split(" ").map(Number);
    map[y][x] = 1;
  }
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      //만약 그 좌표가 1이라면 cnt을 늘려주고 상하좌우 탐색하여 전부 0으로 만들어준다.
      if (map[y][x]) {
        bfs(y, x);
        cnt++;
      }
    }
  }
  console.log(cnt);
}
