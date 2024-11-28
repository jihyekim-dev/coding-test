function solution(my_string) {
  // my_string은 문자열 수식. 연산자는 +/-만 존재. 연산자는 하나 이상
  // 수식 계산한 값을 정수로 return
  // my_string.split(' ') 후에 배열 순회
  // 첫번째 원소를 result에 할당
  // 연산자가 나오면 result에 idx + 1 요소를 더하거나 뺌
  const strArr = my_string.split(' ');
  let result = +strArr[0];
  for (let i = 1; i < strArr.length; i += 2) {
    if (strArr[i] === '+') result += +strArr[i + 1];
    if (strArr[i] === '-') result -= +strArr[i + 1];
  }
  return result;
}
