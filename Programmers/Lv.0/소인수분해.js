function solution(n) {
  // 자연수 n의 소인수를 오름차순으로 담은 arr return
  const result = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      result.push(i);
    }
  }
  return Array.from(new Set(result));
}
