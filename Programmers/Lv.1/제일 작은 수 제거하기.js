function solution(arr) {
  // arr에서 가장 작은 수 제거한 배열 return
  // 만약 arr의 length가 0일 경우, [-1] return
  return arr.length < 2 ? [-1] : arr.filter((v) => v !== Math.min(...arr));
}
