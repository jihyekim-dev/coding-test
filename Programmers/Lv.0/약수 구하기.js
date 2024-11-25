function solution(n) {
  // n의 약수를 오름차순으로 담은 배열 return
  // n을 나눈 나머지가 0인 숫자만 result에 추가
  // result를 arr로 만들어서 반환
  const result = new Set();
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) result.add(i);
  }
  return Array.from(result);
}
