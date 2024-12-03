function solution(my_string) {
  // 모든 자연수들의 합 return
  // 영어 소문자/대문자 거른 뒤 나머지 숫자 다 더하기
  return my_string
    .replace(/[A-z]/g, '')
    .split('')
    .reduce((acc, cur) => acc + +cur, 0);
}
