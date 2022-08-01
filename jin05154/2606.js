const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

const computers = Number(input.shift());
const connection = Number(input.shift());
const graph = [...new Array(computers + 1)].map(() => []);
const visited = [...new Array(computers + 1)].fill(0);
let infected = 0;

// 그래프 생성
input.forEach((edge) => {
  const [start, dest] = edge.split(" ").map((el) => Number(el));
  graph[start].push(dest);
  graph[dest].push(start);
});

// 모든 edge에 대해 dfs 수행, 방문된 노드는 다시 방문 안 함
// 연결된 노드 방문 안 했으면 방문 후 dfs 재귀 호출
const dfs = (start) => {
  for (const dest of graph[start]) {
    if (!visited[dest]) {
      visited[dest] = 1;
      infected++;
      dfs(dest);
    }
  }
};

// 1번부터 dfs -> 1번 컴퓨터를 제외한 감염된 컴퓨터 수 출력
dfs(1);
console.log(infected - 1);
