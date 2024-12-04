function solution(n) {
  // n이하 짝수 전부 더한 값 return
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!(i % 2)) result += i;
  }
  return result;
}
