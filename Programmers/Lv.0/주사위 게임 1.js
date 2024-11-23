function solution(a, b) {
  // 주사위 2개를 굴렸을 때 나오는 숫자를 각각 a, b
  // a, b 모두 홀수 -> a^2 + b^2 점
  // a, b 중 하나만 홀수 -> 2 * (a + b) 점
  // a, b 모두 짝수면 -> |a - b| 점
  return !!(a % 2) && !!(b % 2)
    ? a ** 2 + b ** 2
    : !!(a % 2) || !!(b % 2)
    ? 2 * (a + b)
    : Math.abs(a - b);
}
