function solution(my_string, target) {
  // target이 my_string의 부분 문자열이면 1
  // 아니면 0을 return
  return +my_string.includes(target);
}
