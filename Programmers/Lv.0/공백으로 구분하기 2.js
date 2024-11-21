function solution(my_string) {
  // my_string은 공백 하나 이상으로 단어가 구분된 문자열
  // 단어를 앞에서부터 순서대로 담은 문자열 arr return
  // 문자열 앞 뒤 공백 제거
  // 문자열을 ' '로 split -> 빈문자열 filter
  return my_string
    .trim()
    .split(' ')
    .filter((v) => v.length);
}
