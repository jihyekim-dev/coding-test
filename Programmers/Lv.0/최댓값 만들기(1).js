function solution(numbers) {
  // numbers 원소 중 두 개를 곱해 만들 수 있는 최댓값 return
  const sorted = numbers.sort((a, b) => b - a);
  return sorted[0] * sorted[1];
}
