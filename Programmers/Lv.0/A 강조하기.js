function solution(str) {
  // 문자열에서 a -> A로 변환
  // A가 아닌 모든 대문자 -> 소문자
  // a = 65 + 32 = 97
  // A = 65, Z = 65 + 26 - 1 = 90
  return [...str]
    .map((v) =>
      v.charCodeAt() === 97
        ? 'A'
        : v.charCodeAt() > 65 && v.charCodeAt() < 91
        ? v.toLowerCase()
        : v
    )
    .join('');
}
