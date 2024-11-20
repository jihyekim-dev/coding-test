function solution(arr) {
  // arr 순회하면서 value를 v >= 50 && 짝수면 2로 나눈 값,
  // v < 50 && 홀수이면 2를 곱한 값으로 변경
  return arr.map((v) =>
    v >= 50 && !(v % 2) ? v / 2 : v < 50 && !!(v % 2) ? v * 2 : v
  );
}
