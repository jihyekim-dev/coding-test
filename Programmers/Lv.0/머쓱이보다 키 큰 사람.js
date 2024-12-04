function solution(array, height) {
  // height 보다 큰 수의 개수 return
  return array.filter((v) => v > height).length;
}
