function solution(n) {
  // 정수 n의 약수를 모두 더한 값 return
  // 1 ~ n까지 순회하며 약수 구해서 result에 누적산
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) result += i;
  }
  return result;
}
