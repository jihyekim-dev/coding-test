function solution(array, n) {
  // array에 n이 몇 개 있는지 return
  return array.filter((v) => v === n).length;
}
