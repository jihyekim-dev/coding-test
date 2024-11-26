function solution(my_string) {
  // my_string을  전부 소문자로 변경
  // 이후 알파벳 순서대로 정렬한 문자열을 return
  return Array.from(my_string.toLowerCase()).sort().join('');
}
