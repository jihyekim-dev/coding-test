function solution(arr) {
  // 정수 배열 arr의 원소들의 평균값 return
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}
