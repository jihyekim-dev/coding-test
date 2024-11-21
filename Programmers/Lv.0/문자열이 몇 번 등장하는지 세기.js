function solution(myString, pat) {
  // myString에서 pat이 등장하는 횟수 return
  // myString에서 pat 위치 찾기 -> patIdx
  // patIdx + 1 ~ 마지막 안에서 pat 위치 찾고 patIdx 업데이트
  // 위의 과정 반복하며 count 누적 후 return
  let count = 0;
  let patIdx = myString.indexOf(pat);
  while (patIdx > -1) {
    count++;
    patIdx = myString.indexOf(pat, patIdx + 1);
  }
  return count;
}
