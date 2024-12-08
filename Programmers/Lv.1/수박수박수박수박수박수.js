function solution(n) {
  // '수', '박'을 번갈아가면서 넣되, 문자열의 길이는 n이 되도록 만들기
  return '수박'.repeat(n / 2) + (!(n % 2) ? '' : '수');
}
