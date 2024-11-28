function solution(my_string, num1, num2) {
  // 문자열 my_string에서 num1 과 num2 인덱스의 문자를 바꾼 문자열 return
  // arr로 만들어서 인덱스로 접근해서 원소 서로 바꾸고 다시 문자열로 합치기
  const strArr = [...my_string];
  const temp = strArr[num1];
  strArr[num1] = strArr[num2];
  strArr[num2] = temp;
  return strArr.join('');
}
