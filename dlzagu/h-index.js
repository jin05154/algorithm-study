function solution(citations) {
  citations.sort((a, b) => b - a);

  for (var i = 0; i < citations.length; i++) {
    if (i + 1 > citations[i]) {
      break;
    }
  }

  return i;
}
