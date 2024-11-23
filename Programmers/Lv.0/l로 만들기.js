function solution(myString) {
  // myString은 소문자로 이루어진 문자열
  // l 보다 앞서는 모든 문자를 l 로 바꾼 문자열 return
  return myString.replaceAll(/[a-k]/g, 'l');
}
