function solution(n) {
  // 임의의 양의 정수 n이 어떤 양의 정수의 제곱이라면, x + 1의 제곱
  // 아니라면, -1을 return
  // n의 제곱근을 구해서 제곱근이 정수라면 x + 1의 제곱 return
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}
