function solution(s) {
  // 문자열 s의 가운데 글자 return
  // 문자열의 길이가 짝수일 경우, 가운데 두 글자 return
  const l = s.length;
  return !(l % 2) ? s.slice(l / 2 - 1, l / 2 + 1) : s[Math.ceil(l / 2) - 1];
}
