function solution(a, b) {
  // 길이가 같은 정수 배열 a, b에서 같은 idx 원소들의 곱의 합 return
  return a.reduce((acc, v, i) => acc + v * b[i], 0);
}
