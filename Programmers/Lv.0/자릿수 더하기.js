function solution(n) {
  // 정수 n의 각 자리 숫자를 분리한 뒤, 그 합을 return
  return String(n)
    .split('')
    .reduce((acc, cur) => +acc + +cur, 0);
}
