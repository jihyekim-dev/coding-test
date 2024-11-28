function solution(my_string) {
  // my_string은 문자열. 중복 원소가 있다면, 뒤에 나온 중복 원소 제거
  // ' ' = 공백도 하나의 원소 취급. 결과값은 문자열로 return
  return [...my_string].reduce((result, v, i) => {
    if (!result.includes(v)) result += v;
    return result;
  }, '');
}
