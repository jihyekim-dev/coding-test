function solution(num_str) {
  // num_str은 한 자리의 정수들로 이루어진 문자열
  // 각 자리수의 합을 return
  return num_str.split('').reduce((acc, cur) => +acc + +cur);
}
