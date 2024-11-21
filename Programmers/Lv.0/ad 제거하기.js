function solution(strArr) {
  // strArr의 원소 중 'ad' 라는 문자열 포함하고 있는 원소는 제거
  // 나머지 원소들을 순서 유지하여 배열로 return
  // strArr를 순회하면서 각 원소에서 'ad'의 index 찾기 -> adIdx
  // adIdx > -1 이면 해당 원소 미포함하여 filter
  return strArr.filter((v) => v.indexOf('ad') === -1);
}
