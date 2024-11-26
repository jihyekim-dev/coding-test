function solution(n) {
  // 제곱수: 자연수 제곱했을 때 나오는 정수
  // n이 제곱수라면 1, 아니면 2를 return
  // n의 제곱근이 없다면 n은 제곱수가 아님
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2;
}
