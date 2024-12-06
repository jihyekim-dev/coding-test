function solution(s) {
  // 대소문자가 섞여있는 문자열 s에서 p / y의 개수 비교해 같으면, true
  // 다르면, false return
  return s.replace(/p/gi, '').length === s.replace(/y/gi, '').length;
}
