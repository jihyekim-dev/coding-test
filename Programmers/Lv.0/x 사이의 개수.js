function solution(myString) {
  // myString을 'x' 기준으로 나누기
  // 나눠진 문자열 각각의 길이를 순서대로 저장한 배열 return
  // myString을 'x'로 split -> 각 원소를 v.length로 mapping
  return myString.split('x').map((v) => v.length);
}
