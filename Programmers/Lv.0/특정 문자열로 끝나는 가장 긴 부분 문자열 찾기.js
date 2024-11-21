function solution(myString, pat) {
  // myString 부분 문자열 중 pat으로 끝나는 가장 긴 부분 문자열 return
  // myString에서 pat index 찾은 뒤 slice
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}
