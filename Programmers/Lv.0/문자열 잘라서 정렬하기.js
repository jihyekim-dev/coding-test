function solution(myString) {
  // myString을 'x' 기준으로 split -> 빈문자열 filter
  // 사전순으로 sort한 배열 return
  return myString
    .split('x')
    .filter((v) => v.length)
    .sort();
}
