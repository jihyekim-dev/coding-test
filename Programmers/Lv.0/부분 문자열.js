function solution(str1, str2) {
  // str1이 str2의 부분 문자열이면 1, 아니면 0 return
  return +str2.includes(str1);
}
