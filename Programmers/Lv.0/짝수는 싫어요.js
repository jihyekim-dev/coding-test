function solution(n) {
  // n 이하 홀수가 오름차순으로 담긴 배열 return
  const result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  return result;
}
