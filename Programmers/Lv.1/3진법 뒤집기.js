function solution(n) {
  // 자연수 n을 3진법 상에서 뒤집은 후 다시 10진법으로 return
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
