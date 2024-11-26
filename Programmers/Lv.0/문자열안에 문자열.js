function solution(str1, str2) {
  // str1 안에 str2가 있다면 1, 없다면 2 return
  return str1.includes(str2) ? 1 : 2;
}
