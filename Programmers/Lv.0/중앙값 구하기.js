function solution(array) {
  // 중앙값 return
  // 오름차순 정렬 -> 가운데 idx 구해서 return
  return array.sort((a, b) => a - b)[parseInt(array.length / 2)];
}
