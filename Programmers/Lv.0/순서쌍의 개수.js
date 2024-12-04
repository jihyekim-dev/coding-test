function solution(n) {
  // 두 숫자의 곱이 n인 자연수 순서쌍 개수 return
  // 1 ~ n 까지 순회하며 n과 나누기 연산 -> 0이면 count++
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!(n % i)) count++;
  }
  return count;
}
