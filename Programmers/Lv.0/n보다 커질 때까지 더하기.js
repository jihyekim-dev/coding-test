function solution(numbers, n) {
  // numbers 합이 n 보다 작거나 같을 동안만 순회
  let sum = 0;
  let i = 0;
  while (sum <= n) {
    sum += numbers[i];
    i++;
  }
  return sum;
}
