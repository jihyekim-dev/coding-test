function solution(n, t) {
  // 세균은 1시간에 두 배 증식
  // n마리의 세균이 있을 때, t시간 후 세균 수 return
  return 2 ** t * n;
}
