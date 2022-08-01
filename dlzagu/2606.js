let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const dfs = (graph, start) => {
  let visited = []; // 방문한곳
  let needVist = []; // 방문 해야될 곳

  needVist.push(start);

  while (needVist.length !== 0) {
    // 방문할 곳이 없으면 stop
    const node = needVist.pop(); //  자기 자신과 연결되었던 노드들 먼저 탐색하기 때문에 stack을 사용.
    if (!visited.includes(node)) {
      // 이미 방문했다면 pass
      visited.push(node);
      needVist = [...needVist, ...graph[node]]; // 이어서 방문할 곳 추가
    }
  }
  return visited;
};

let cnt = Number(input.shift());
let edge = Number(input.shift());
let grph = [...new Array(cnt + 1)].map((a) => []);

for (let i = 0; i < edge; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  grph[from].push(to);
  grph[to].push(from);
}
console.log(dfs(grph, 1).length - 1);

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const bfs = (graph, startNode) => {
//   const visited = [];
//   let needVisit = [];

//   needVisit.push(startNode);

//   while(needVisit.length !==0){
//     const node = needVisit.shift();
//     if(!visited.includes(node)){
//       visited.push(node);
//       needVisit = [...needVisit, ...graph[node]];
//     }
//   }

//   return visited;
// };
// console.log(bfs(grph, 1).length - 1);
