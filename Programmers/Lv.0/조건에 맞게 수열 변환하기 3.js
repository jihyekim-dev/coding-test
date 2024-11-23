function solution(arr, k) {
  // k가 홀수면 arr의 모든 원소에 k 곱하기
  // k가 짝수면 arr의 모든 원소에 k 더하기
  return arr.map((v) => (!!(k % 2) ? v * k : v + k));
}
