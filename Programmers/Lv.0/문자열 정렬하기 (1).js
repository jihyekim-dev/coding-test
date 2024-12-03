function solution(my_string) {
  // 숫자만 골라서 오름차순 정렬한 arr return
  // 영어 소문자 제거한 뒤 sort
  return my_string
    .replace(/[a-z]/g, '')
    .split('')
    .map((v) => +v)
    .sort((a, b) => a - b);
}
