function solution(myString, pat) {
  // 두 str 전부 소문자로 만들어서 검색
  return +myString.toLowerCase().includes(pat.toLowerCase());
}
