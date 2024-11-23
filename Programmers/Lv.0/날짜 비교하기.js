function solution(date1, date2) {
  // date는 [year, month, day] 형식
  // date1이 date2보다 전 날이면 1, 아니면 0을 return
  // 탈출 가능한 while문 사용
  // 비교 후 0 이나 1이 나오면 비교 중단하고 결과 반환
  // 끝까지 다 비기면 0 반환
  let i = 0;
  let result = -1;
  while (!result in [0, 1] || i < date1.length) {
    if (date1[i] > date2[i]) {
      result = 0;
      break;
    } else if (date1[i] < date2[i]) {
      result = 1;
      break;
    } else if (i === date1.length - 1 && date1[i] === date2[i]) {
      result = 0;
      break;
    }
    i++;
  }
  return result;
}
