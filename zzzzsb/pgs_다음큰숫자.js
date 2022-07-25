function solution(n) {
  let oneCnt = n.toString(2).match(/1/g).length;
  while(n++){
      if(oneCnt === n.toString(2).match(/1/g).length) return n;
  }
}