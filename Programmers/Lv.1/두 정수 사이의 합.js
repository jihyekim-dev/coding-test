function solution(a, b) {
  // 정수 a, b 사이의 모든 정수의 합 return
  // a, b 사이에 대소관계가 정해져 있지 않음
  return Array(Math.abs(a - b) + 1)
    .fill(a <= b ? a : b)
    .reduce((acc, cur, i) => acc + cur + i);
}
