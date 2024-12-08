function solution(s) {
  // 문자열 s의 길이가 4 || 6 이고, 모두 숫자로만 구성되어 있다면 true
  return (
    (s.length === 4 || s.length === 6) &&
    s.replace(/[a-z]/gi, '').length === s.length
  );
}
