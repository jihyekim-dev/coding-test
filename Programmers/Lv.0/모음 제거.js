function solution(my_string) {
  // 모음 (a, e, i, o, u) 제거한 문자열 return
  return my_string.replace(/[a|e|i|o|u]/g, '');
}
