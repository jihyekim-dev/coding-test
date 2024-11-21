function solution(strArr) {
  // 홀수 i의 문자열은 대문자
  // 짝수 i의 문자열은 소문자
  return strArr.map((v, i) => (!(i % 2) ? v.toLowerCase() : v.toUpperCase()));
}
