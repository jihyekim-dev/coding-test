function solution(my_string) {
  // my_string은 소문자, 대문자, 자연수로 구성된 문자열
  // my_string 안의 자연수 원소들의 합 return
  // 자연수 원소가 없는 경우 0 return
  // my_string 안의 문자 모두 제거 -> 연산
  return my_string
    .replace(/[a-z|A-Z]/g, ' ')
    .split(' ')
    .reduce((acc, cur) => (+cur ? acc + +cur : acc), 0);
}
